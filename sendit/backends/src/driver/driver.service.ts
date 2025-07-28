import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DriverMetricsI } from 'src/interfaces/driver-metrics.interface';
import { UpdateParcelStatusDto } from './dto/update-parcel-status.dto';
import { LocationGateway } from 'src/location/location.gateway';

@Injectable()
export class DriverService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly locationGateway: LocationGateway, // ✅ for WebSocket updates
  ) {}

  /** Get all assigned parcels for a driver */
  async getAssignedParcels(driverId: string) {
    const parcels = await this.prisma.parcel.findMany({
      where: {
        driverId,
        deletedAt: null,
      },
      orderBy: { createdAt: 'desc' },
      include: {
        sender: {
          select: { firstName: true, lastName: true, email: true },
        },
        receiver: {
          select: { firstName: true, lastName: true, email: true },
        },
        statusHistory: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    return parcels.map((p) => ({
      id: p.id,
      trackingId: p.trackingId,
      description: p.description,
      weight: p.weight,
      category: p.category,
      status: p.status,
      createdAt: p.createdAt,
      pickupAddress: p.pickupAddress,
      deliveryAddress: p.deliveryAddress,
      sender: p.sender,
      receiver: p.receiver,
      latestStatus: p.statusHistory[0]?.status ?? 'PENDING',
      latestNote: p.statusHistory[0]?.notes ?? '',
    }));
  }

  /** Enforce progressive status update: PENDING → PICKED_UP → IN_TRANSIT → DELIVERED */
  async updateParcelProgressionStatus(
    driverId: string,
    parcelId: string,
    newStatus: 'PICKED_UP' | 'IN_TRANSIT' | 'DELIVERED',
    note?: string,
  ): Promise<{ message: string }> {
    const parcel = await this.prisma.parcel.findUnique({
      where: { id: parcelId },
    });

    if (!parcel || parcel.driverId !== driverId) {
      throw new NotFoundException('Parcel not found or not assigned to you');
    }

    const allowedTransitions = {
      PENDING: 'PICKED_UP',
      PICKED_UP: 'IN_TRANSIT',
      IN_TRANSIT: 'DELIVERED',
    };

    const expectedStatus = allowedTransitions[parcel.status];
    if (expectedStatus !== newStatus) {
      throw new ForbiddenException(
        `Invalid status transition from ${parcel.status} to ${newStatus}`,
      );
    }

    await this.prisma.parcel.update({
      where: { id: parcelId },
      data: {
        status: newStatus,
        ...(newStatus === 'PICKED_UP' && { pickedUpAt: new Date() }),
        ...(newStatus === 'DELIVERED' && { deliveredAt: new Date() }),
      },
    });

    await this.prisma.parcelStatusHistory.create({
      data: {
        parcelId,
        status: newStatus,
        notes: note ?? `Updated by driver to ${newStatus}`,
      },
    });

    return { message: `Parcel marked as ${newStatus}` };
  }

  /** Handle failed or irregular delivery updates */
  async markParcelDeliveryIssue(
    driverId: string,
    parcelId: string,
    dto: UpdateParcelStatusDto,
  ): Promise<{ message: string }> {
    const parcel = await this.prisma.parcel.findUnique({
      where: { id: parcelId },
    });

    if (!parcel || parcel.driverId !== driverId) {
      throw new NotFoundException('Parcel not found or access denied');
    }

    if (parcel.status === 'DELIVERED' || parcel.status === 'CANCELLED') {
      throw new ForbiddenException('Cannot update completed or cancelled parcel');
    }

    await this.prisma.parcel.update({
      where: { id: parcelId },
      data: {
        status: dto.status,
        deliveredAt: dto.status === 'DELIVERED' ? new Date() : undefined,
      },
    });

    await this.prisma.parcelStatusHistory.create({
      data: {
        parcelId,
        status: dto.status,
        notes: dto.notes ?? 'Marked by driver',
      },
    });

    return { message: `Parcel status updated to ${dto.status}` };
  }

  /** Metrics dashboard for driver */
  async getDriverMetrics(driverId: string): Promise<DriverMetricsI> {
    const [totalAssigned, delivered, inTransit, cancelled, pickedUp] =
      await Promise.all([
        this.prisma.parcel.count({ where: { driverId, deletedAt: null } }),
        this.prisma.parcel.count({
          where: { driverId, status: 'DELIVERED', deletedAt: null },
        }),
        this.prisma.parcel.count({
          where: { driverId, status: 'IN_TRANSIT', deletedAt: null },
        }),
        this.prisma.parcel.count({
          where: { driverId, status: 'CANCELLED', deletedAt: null },
        }),
        this.prisma.parcel.count({
          where: { driverId, status: 'PICKED_UP', deletedAt: null },
        }),
      ]);

    return {
      totalAssigned,
      delivered,
      inTransit,
      cancelled,
      pickedUp,
    };
  }

  /** Update current driver location (and emit real-time update) */
  async updateLocation(
    driverId: string,
    parcelId: string,
    lat: number,
    lng: number,
  ) {
    const parcel = await this.prisma.parcel.findUnique({ where: { id: parcelId } });
    if (!parcel || parcel.driverId !== driverId) {
      throw new ForbiddenException('Parcel not found or not yours');
    }

    const location = await this.prisma.parcelLocation.create({
      data: {
        parcelId,
        latitude: lat,
        longitude: lng,
      },
    });

    // 🔴 Broadcast real-time update to parcel tracking room
    this.locationGateway.sendLocationUpdate(parcelId, {
      latitude: lat,
      longitude: lng,
      timestamp: location.timestamp,
    });

    return { message: 'Location updated and broadcasted' };
  }

  /** Get latest known location for driver’s own parcel */
  async getLatestParcelLocation(parcelId: string, driverId: string) {
    const parcel = await this.prisma.parcel.findUnique({
      where: { id: parcelId },
    });

    if (!parcel || parcel.driverId !== driverId) {
      throw new ForbiddenException('Not authorized to view this parcel location');
    }

    return this.prisma.parcelLocation.findFirst({
      where: { parcelId },
      orderBy: { timestamp: 'desc' },
    });
  }
}
