import { BadRequestException, Injectable, NotFoundException, Delete, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AdminDashboardData } from '../interfaces/admin-dashboard.interface';
import { UserI } from 'src/interfaces/user.interface';
import { Parcel, ParcelStatus, ParcelStatusHistory } from '@prisma/client';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { Notification } from '@prisma/client';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { MailService } from '../mail/mail.service';
import { CreateWeightPricingDto } from './dto/create-weight-pricing.dto';
import { UpdateWeightPricingDto } from './dto/update-weight-pricing.dto';
import { WeightCategory, WeightPricing } from '@prisma/client';
import { CreateSystemSettingDto } from './dto/create-system-setting.dto';
import { UpdateSystemSettingDto } from './dto/update-system-setting.dto';
import { SendNotificationDto } from './dto/send-notification.dto';
import * as bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';
import { CreateDriverDto } from './dto/create-driver.dto';
import { AssignDriverDto } from './dto/assign-driver.dto';




@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService, private readonly mail: MailService,) {}

  async getDashboard(): Promise<AdminDashboardData> {
    const [totalUsers, totalParcels, deliveredParcels, pendingParcels, totalEarnings] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.parcel.count(),
        this.prisma.parcel.count({ where: { status: 'DELIVERED' } }),
        this.prisma.parcel.count({ where: { status: 'PENDING' } }),
        this.prisma.parcel.aggregate({ _sum: { totalPrice: true } }),
      ]);

    return {
      totalUsers,
      totalParcels,
      deliveredParcels,
      pendingParcels,
      totalEarnings: totalEarnings._sum.totalPrice ?? 0,
    };
  }

  async getAllUsers(): Promise<UserI[]> {
    const users = await this.prisma.user.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });

    return users.map((user) => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone ?? undefined,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt ?? undefined,
      firstLogin: user.firstLogin,
    }));
  }
    async searchUsers(query: string): Promise<UserI[]> {
        const users = await this.prisma.user.findMany({
        where: {
            deletedAt: null,
            OR: [
            { email: { contains: query, mode: 'insensitive' } },
            { firstName: { contains: query, mode: 'insensitive' } },
            { lastName: { contains: query, mode: 'insensitive' } },
            ],
        },
        orderBy: { createdAt: 'desc' },
        });
    
        return users.map((user) => ({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone ?? undefined,
        role: user.role,
        isActive: user.isActive,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt ?? undefined,
        firstLogin: user.firstLogin,
        }));
    }
    async toggleUserStatus(userId: string, isActive: boolean): Promise<{ message: string }> {
        const user = await this.prisma.user.findUnique({
        where: { id: userId },
        });

        if (!user) throw new NotFoundException('User not found');

        if (user.role === 'ADMIN') {
        throw new BadRequestException('Cannot change status of an admin');
        }

        await this.prisma.user.update({
        where: { id: userId },
        data: { isActive },
        });

        return { message: `User has been ${isActive ? 'activated' : 'deactivated'}` };
    }
    async getAllParcels(): Promise<Parcel[]> {
        return this.prisma.parcel.findMany({
        include: {
            sender: { select: { id: true, firstName: true, lastName: true, email: true } },
            receiver: { select: { id: true, firstName: true, lastName: true, email: true } },
        },
        orderBy: { createdAt: 'desc' },
        });
    }
    async updateParcelStatus(parcelId: string, status: ParcelStatus): Promise<{ message: string }> {
        const parcel = await this.prisma.parcel.findUnique({
            where: { id: parcelId },
            include: {
            receiver: true, // 👈 we need receiver's email
            },
        });

        if (!parcel) throw new NotFoundException('Parcel not found');

        await this.prisma.parcel.update({
            where: { id: parcelId },
            data: { status },
        });

        await this.prisma.parcelStatusHistory.create({
            data: {
            parcelId,
            status,
            notes: `Status manually updated by admin`,
            },
        });

        // ✅ Send email to receiver
        await this.mail.sendMail({
            to: parcel.receiver.email,
            subject: `Parcel Status Update: ${status}`,
            template: 'parcel-status-update', // template we'll create
            context: {
            name: `${parcel.receiver.firstName} ${parcel.receiver.lastName}`,
            status,
            trackingId: parcel.trackingId,
            deliveryAddress: parcel.deliveryAddress,
            },
        });

        return { message: `Parcel status updated to ${status}` };
    }
    async getParcelById(parcelId: string): Promise<Parcel> {
        const parcel = await this.prisma.parcel.findUnique({
            where: { id: parcelId },
            include: {
                sender: { select: { id: true, firstName: true, lastName: true, email: true } },
                receiver: { select: { id: true, firstName: true, lastName: true, email: true } },
            },
        });

        if (!parcel) throw new NotFoundException('Parcel not found');

        return parcel;
    }
    async getParcelHistory(parcelId: string): Promise<ParcelStatusHistory[]> {
        return this.prisma.parcelStatusHistory.findMany({
            where: { parcelId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async softDeleteParcel(parcelId: string): Promise<{ message: string }> {
        const parcel = await this.prisma.parcel.findUnique({ where: { id: parcelId } });
        if (!parcel) throw new NotFoundException('Parcel not found');
    
        await this.prisma.parcel.update({
        where: { id: parcelId },
        data: { deletedAt: new Date() },
        });
    
        return { message: 'Parcel has been soft deleted' };
    }
    async restoreParcel(parcelId: string): Promise<{ message: string }> {
        const parcel = await this.prisma.parcel.findUnique({
            where: { id: parcelId },
        });

        if (!parcel) throw new NotFoundException('Parcel not found');

        if (!parcel.deletedAt) {
            throw new BadRequestException('Parcel is not deleted');
        }

        await this.prisma.parcel.update({
            where: { id: parcelId },
            data: { deletedAt: null },
        });

        return { message: 'Parcel restored successfully' };
    }
    async deleteParcelPermanently(parcelId: string): Promise<{ message: string }> {
        const parcel = await this.prisma.parcel.findUnique({ where: { id: parcelId } });
        if (!parcel) throw new NotFoundException('Parcel not found');
    
        await this.prisma.parcel.delete({ where: { id: parcelId } });
    
        return { message: 'Parcel has been permanently deleted' };
    }
    async getParcelStatusHistory(parcelId: string): Promise<ParcelStatusHistory[]> {
        const history = await this.prisma.parcelStatusHistory.findMany({
            where: { parcelId },
            orderBy: { createdAt: 'desc' },
        });

        if (!history) throw new NotFoundException('Parcel status history not found');

        return history;
    }
    async getDeletedParcels(): Promise<Parcel[]> {
        return this.prisma.parcel.findMany({
            where: { deletedAt: { not: null } },
            include: {
            sender: true,
            receiver: true,
            },
        });
    }
    async createParcel(dto: CreateParcelDto): Promise<{ message: string }> {
        const sender = await this.prisma.user.findUnique({ where: { id: dto.senderId } });
        const receiver = await this.prisma.user.findUnique({ where: { id: dto.receiverId } });

        if (!sender || !receiver) {
            throw new NotFoundException('Sender or receiver not found');
        }

        await this.prisma.parcel.create({
            data: {
            description: dto.description,
            weight: dto.weight,
            category: dto.category,
            status: dto.status,
            senderId: dto.senderId,
            receiverId: dto.receiverId,
            pickupAddress: dto.pickupAddress,
            deliveryAddress: dto.deliveryAddress,
            basePrice: dto.basePrice,
            totalPrice: dto.totalPrice,
            },
        });

        return { message: 'Parcel created successfully' };
    }
    async createNotification(dto: CreateNotificationDto): Promise<{ message: string }> {
        const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
        if (!user) throw new NotFoundException('User not found');

        await this.prisma.notification.create({
            data: {
            userId: dto.userId,
            parcelId: dto.parcelId,
            type: dto.type,
            subject: dto.subject,
            message: dto.message,
            sentAt: new Date(),
            },
        });

        return { message: 'Notification sent and saved' };
    }

        // Filter by user ID or parcel ID
    async filterNotifications(query: { userId?: string; parcelId?: string }): Promise<Notification[]> {
        return this.prisma.notification.findMany({
            where: {
            ...(query.userId && { userId: query.userId }),
            ...(query.parcelId && { parcelId: query.parcelId }),
            },
            include: {
            user: true,
            parcel: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async markAsRead(id: string): Promise<{ message: string }> {
        await this.prisma.notification.update({
            where: { id },
            data: { isRead: true },
        });
        return { message: 'Notification marked as read' };
    }
    async markAllAsRead(userId: string): Promise<{ message: string }> {
        await this.prisma.notification.updateMany({
        where: { userId, isRead: false },
        data: { isRead: true },
        });
        return { message: 'All notifications marked as read' };
    }
    // Create new weight pricing
    async createWeightPricing(dto: CreateWeightPricingDto): Promise<WeightPricing> {
        return this.prisma.weightPricing.create({ data: dto });
    }

        // Get all weight pricing categories
    async getWeightPricings(): Promise<WeightPricing[]> {
        return this.prisma.weightPricing.findMany({ orderBy: { createdAt: 'asc' } });
    }

        // Update a weight pricing by ID
    async updateWeightPricing(id: string, dto: UpdateWeightPricingDto): Promise<WeightPricing> {
        return this.prisma.weightPricing.update({
            where: { id },
            data: dto,
        });
    }

        // Get single weight pricing by category
    async getWeightPricingByCategory(category: WeightCategory): Promise<WeightPricing | null> {
        return this.prisma.weightPricing.findUnique({ where: { category } });
    }
    async createSystemSetting(dto: CreateSystemSettingDto) {
        const exists = await this.prisma.systemSettings.findUnique({
            where: { key: dto.key },
        });

        if (exists) {
            throw new BadRequestException('Setting with this key already exists');
        }

        return this.prisma.systemSettings.create({
            data: { key: dto.key, value: dto.value },
        });
    }

    async updateSystemSetting(key: string, dto: UpdateSystemSettingDto) {
        const exists = await this.prisma.systemSettings.findUnique({
            where: { key },
        });

        if (!exists) {
            throw new NotFoundException('Setting not found');
        }

        return this.prisma.systemSettings.update({
            where: { key },
            data: {
            value: dto.value,
            },
        });
    }

    async getSystemSetting(key: string) {
        return this.prisma.systemSettings.findUnique({
            where: { key },
        });
    }

    async deleteSystemSetting(key: string) {
        return this.prisma.systemSettings.delete({
            where: { key },
        });
    }
    async getAllNotifications() {
        return this.prisma.notification.findMany({
            include: {
            user: { select: { id: true, email: true, firstName: true, lastName: true } },
            parcel: { select: { id: true, trackingId: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async sendNotification(dto: SendNotificationDto) {
        const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
        if (!user) throw new NotFoundException('User not found');

        const notification = await this.prisma.notification.create({
            data: {
            userId: dto.userId,
            parcelId: dto.parcelId ?? null,
            type: dto.type,
            subject: dto.subject,
            message: dto.message,
            sentAt: new Date(),
            },
        });

        // Optional: send real email/SMS via MailService here
        // await this.mail.sendMail({ to: user.email, subject: dto.subject, template: ..., context: {...} });

        return notification;
    }

    async markNotificationAsRead(id: string) {
        return this.prisma.notification.update({
            where: { id },
            data: { isRead: true },
        });
    }

    async markNotificationAsUnread(id: string) {
        return this.prisma.notification.update({
            where: { id },
            data: { isRead: false },
        });
    }
    async createDriver(dto: CreateDriverDto) {
        const exists = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (exists) throw new BadRequestException('Driver email already exists');

        const tempPassword = randomBytes(6).toString('hex'); // e.g., 'a7b3d9f2ac'
        const hashed = await bcrypt.hash(tempPassword, 10);

        const driver = await this.prisma.user.create({
            data: {
            firstName: dto.firstName,
            lastName: dto.lastName,
            email: dto.email,
            phone: dto.phone,
            password: hashed,
            role: 'DRIVER',
            firstLogin: true,
            },
        });

        // ✅ Send onboarding email
        await this.mail.sendMail({
            to: driver.email,
            subject: '🚚 Driver Account Created',
            template: 'driver-onboard',
            context: {
            name: `${driver.firstName} ${driver.lastName}`,
            email: driver.email,
            password: tempPassword,
            },
        });

        return { message: 'Driver created and email sent successfully' };
    }
    async assignDriverToParcel(parcelId: string, dto: AssignDriverDto): Promise<{ message: string }> {
        const parcel = await this.prisma.parcel.findUnique({
            where: { id: parcelId },
            include: {
            receiver: true,
            sender: true,
            },
        });

        if (!parcel) throw new NotFoundException('Parcel not found');

        const driver = await this.prisma.user.findUnique({
            where: { id: dto.driverId },
        });

        if (!driver || driver.role !== 'DRIVER') {
            throw new ForbiddenException('Driver not found or not a valid DRIVER');
        }

        await this.prisma.parcel.update({
            where: { id: parcelId },
            data: { driverId: dto.driverId },
        });

        // Send email to the driver
        await this.mail.sendMail({
            to: driver.email,
            subject: 'Parcel Assigned to You',
            template: 'assigned-parcel',
            context: {
            firstName: driver.firstName,
            lastName: driver.lastName,
            trackingId: parcel.trackingId,
            pickupAddress: parcel.pickupAddress,
            deliveryAddress: parcel.deliveryAddress,
            },
        });

        return { message: 'Driver successfully assigned and notified' };
    }

    



}
