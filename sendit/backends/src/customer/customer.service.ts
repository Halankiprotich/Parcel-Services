// src/customer/customer.service.ts
import { Injectable, NotFoundException,  ForbiddenException, BadRequestException} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { CustomerParcelI } from '../interfaces/customer-parcel.interface';
import { TrackedParcelI } from '../interfaces/tracked-parcel.interface';
import { WeightCategory } from '@prisma/client';
import { NotificationI } from 'src/interfaces/notification,interface';
import { UpdateProfileDto } from './dto/update-profile.dto';
import bcrypt from 'bcryptjs/umd/types';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ParcelMetricsI } from 'src/interfaces/parcel-metrics.interface';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService, private readonly mail: MailService) {}


    private determineCategory(weight: number): WeightCategory {
        if (weight <= 5) return 'LIGHT';
        if (weight <= 20) return 'MEDIUM';
        if (weight <= 50) return 'HEAVY';
        return 'EXTRA_HEAVY';
    }

    async sendParcel(userId: string, dto: CreateParcelDto): Promise<CustomerParcelI> {
        const receiver = await this.prisma.user.findUnique({ where: { id: dto.receiverId } });
        if (!receiver) throw new NotFoundException('Receiver not found');

        const pricing = await this.prisma.weightPricing.findUnique({
        where: { category: dto.category },
        });

        if (!pricing) throw new NotFoundException('Pricing not configured for this category');

        const totalPrice = pricing.basePrice + dto.weight * pricing.pricePerKg;

        const parcel = await this.prisma.parcel.create({
        data: {
            ...dto,
            senderId: userId,
            totalPrice,
            basePrice: pricing.basePrice,
        },
        });

        return {
        id: parcel.id,
        trackingId: parcel.trackingId,
        description: parcel.description,
        status: parcel.status,
        totalPrice: parcel.totalPrice,
        category: parcel.category,
        createdAt: parcel.createdAt,
        deliveryAddress: parcel.deliveryAddress ?? dto.deliveryAddress,
        };
    }
    async trackParcel(userId: string, parcelId: string): Promise<TrackedParcelI> {
        const parcel = await this.prisma.parcel.findUnique({
            where: { id: parcelId },
            include: {
            receiver: true,
            statusHistory: {
                orderBy: { createdAt: 'desc' },
            },
            },
        });

        if (!parcel || parcel.senderId !== userId) {
            throw new NotFoundException('Parcel not found or access denied');
        }

        return {
            id: parcel.id,
            trackingId: parcel.trackingId,
            status: parcel.status,
            description: parcel.description,
            category: parcel.category,
            totalPrice: parcel.totalPrice,
            deliveryAddress: parcel.deliveryAddress,
            receiver: {
            name: `${parcel.receiver.firstName} ${parcel.receiver.lastName}`,
            email: parcel.receiver.email,
            },
            history: parcel.statusHistory.map(h => ({
            status: h.status,
            notes: h.notes ?? undefined,
            createdAt: h.createdAt,
            })),
        };
    }

    async cancelParcel(userId: string, parcelId: string): Promise<{ message: string }> {
        const parcel = await this.prisma.parcel.findUnique({
            where: { id: parcelId },
        });

        if (!parcel) throw new NotFoundException('Parcel not found');

        if (parcel.senderId !== userId) {
            throw new ForbiddenException('You are not allowed to cancel this parcel');
        }

        if (parcel.status !== 'PENDING') {
            throw new BadRequestException('Parcel cannot be cancelled after pickup');
        }

        await this.prisma.parcel.update({
            where: { id: parcelId },
            data: {
            status: 'CANCELLED',
            },
        });

        await this.prisma.parcelStatusHistory.create({
            data: {
            parcelId,
            status: 'CANCELLED',
            notes: 'Cancelled by sender',
            },
        });

        return { message: 'Parcel successfully cancelled' };
    }

    async createParcel(senderId: string, dto: CreateParcelDto) {
        const receiver = await this.prisma.user.findUnique({
            where: { email: dto.receiverEmail },
        });

        if (!receiver) throw new NotFoundException('Receiver not found');

        const category = this.determineCategory(dto.weight);

        const pricing = await this.prisma.weightPricing.findUnique({
            where: { category },
        });

        if (!pricing) throw new BadRequestException('Pricing config missing');

        const basePrice = pricing.basePrice;
        const totalPrice = basePrice + dto.weight * pricing.pricePerKg;

        const parcel = await this.prisma.parcel.create({
            data: {
            senderId,
            receiverId: receiver.id,
            description: dto.description,
            weight: dto.weight,
            category,
            pickupAddress: dto.pickupAddress,
            pickupLatitude: dto.pickupLatitude,
            pickupLongitude: dto.pickupLongitude,
            deliveryAddress: dto.deliveryAddress,
            deliveryLatitude: dto.deliveryLatitude,
            deliveryLongitude: dto.deliveryLongitude,
            basePrice,
            totalPrice,
            },
            include: {
            receiver: true,
            },
        });

        await this.prisma.parcelStatusHistory.create({
            data: {
            parcelId: parcel.id,
            status: 'PENDING',
            notes: 'Order created',
            },
        });

        // ✅ Send email to the receiver
        await this.mail.sendMail({
            to: parcel.receiver.email,
            subject: '📦 New Parcel Incoming!',
            template: 'parcel-created',
            context: {
            name: `${parcel.receiver.firstName} ${parcel.receiver.lastName}`,
            trackingId: parcel.trackingId,
            pickupAddress: parcel.pickupAddress,
            deliveryAddress: parcel.deliveryAddress,
            category: parcel.category,
            status: parcel.status,
            },
        });

        return { message: 'Parcel created successfully', trackingId: parcel.trackingId };
    }

    async getMyParcels(userId: string) {
        const parcels = await this.prisma.parcel.findMany({
            where: {
            senderId: userId,
            deletedAt: null,
            },
            include: {
            receiver: {
                select: { id: true, firstName: true, lastName: true, email: true },
            },
            statusHistory: {
                orderBy: { createdAt: 'desc' },
                take: 1, // Get latest status
            },
            },
            orderBy: { createdAt: 'desc' },
        });

        return parcels.map((parcel) => ({
            id: parcel.id,
            trackingId: parcel.trackingId,
            description: parcel.description,
            weight: parcel.weight,
            category: parcel.category,
            status: parcel.status,
            receiver: parcel.receiver,
            createdAt: parcel.createdAt,
            latestStatusNote: parcel.statusHistory[0]?.notes ?? '',
        }));
    }
    async getParcelStatusHistory(parcelId: string) {
        const history = await this.prisma.parcelStatusHistory.findMany({
        where: { parcelId },
        orderBy: { createdAt: 'desc' },
        });
    
        if (history.length === 0) {
        throw new NotFoundException('Parcel status history not found');
        }
    
        return history.map(h => ({
        status: h.status,
        notes: h.notes ?? '',
        createdAt: h.createdAt,
        }));
    }
    async getMyNotifications(userId: string): Promise<NotificationI[]> {
        const notifications = await this.prisma.notification.findMany({
            where: {
            userId,
            },
            orderBy: {
            createdAt: 'desc',
            },
        });

        return notifications.map((n) => ({
            id: n.id,
            subject: n.subject ?? undefined,
            message: n.message,
            isRead: n.isRead,
            sentAt: n.sentAt ?? undefined,
            parcelId: n.parcelId ?? undefined,
            createdAt: n.createdAt,
        }));
    }
    async markNotificationAsRead(userId: string, notificationId: string): Promise<{ message: string }> {
        const notification = await this.prisma.notification.findUnique({
            where: { id: notificationId },
        });

        if (!notification || notification.userId !== userId) {
            throw new NotFoundException('Notification not found');
        }

        await this.prisma.notification.update({
            where: { id: notificationId },
            data: { isRead: true },
        });

        return { message: 'Notification marked as read' };
    }
    async updateProfile(userId: string, dto: UpdateProfileDto): Promise<{ message: string }> {
        await this.prisma.user.update({
            where: { id: userId },
            data: {
            firstName: dto.firstName,
            lastName : dto.lastName,
            phone    : dto.phone,
            },
        });

        return { message: 'Profile updated successfully' };
    }
    async changePassword(userId: string, dto: ChangePasswordDto): Promise<{ message: string }> {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new Error('User not found');

        const valid = await bcrypt.compare(dto.currentPassword, user.password);
        if (!valid) throw new Error('Current password is incorrect');

        const hashed = await bcrypt.hash(dto.newPassword, 10);

        await this.prisma.user.update({
            where: { id: userId },
            data: { password: hashed },
        });

        return { message: 'Password changed successfully' };
    }
    async getParcelMetrics(userId: string): Promise<ParcelMetricsI> {
        const [total, delivered, inTransit, pending, cancelled, spent] = await Promise.all([
            this.prisma.parcel.count({ where: { senderId: userId } }),
            this.prisma.parcel.count({ where: { senderId: userId, status: 'DELIVERED' } }),
            this.prisma.parcel.count({ where: { senderId: userId, status: 'IN_TRANSIT' } }),
            this.prisma.parcel.count({ where: { senderId: userId, status: 'PENDING' } }),
            this.prisma.parcel.count({ where: { senderId: userId, status: 'CANCELLED' } }),
            this.prisma.parcel.aggregate({
            _sum: { totalPrice: true },
            where: { senderId: userId },
            }),
        ]);

        return {
            totalParcels: total,
            delivered,
            inTransit,
            pending,
            cancelled,
            totalSpent: spent._sum.totalPrice ?? 0,
        };
    }
    async editParcel(
        userId: string,
        parcelId: string,
        dto: UpdateParcelDto,
        ): Promise<{ message: string }> {
        const parcel = await this.prisma.parcel.findUnique({ where: { id: parcelId } });
        if (!parcel || parcel.senderId !== userId) {
            throw new NotFoundException('Parcel not found or access denied');
        }
        if (parcel.status !== 'PENDING') {
            throw new BadRequestException('Only pending parcels can be edited');
        }

        await this.prisma.parcel.update({
            where: { id: parcelId },
            data: {
            ...dto,
            },
        });

        await this.prisma.parcelStatusHistory.create({
            data: {
            parcelId,
            status: 'PENDING',
            notes: 'Edited by sender before pickup',
            },
        });

        return { message: 'Parcel updated successfully' };
    }

}
