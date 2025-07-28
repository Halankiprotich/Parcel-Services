import { Controller, Get, UseGuards, Query, Body, Patch, Param, Delete, NotFoundException, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole, Parcel, ParcelStatus, ParcelStatusHistory, WeightCategory } from '@prisma/client';
import { AdminDashboardData } from '../interfaces/admin-dashboard.interface';
import { UserI } from 'src/interfaces/user.interface';
import { ToggleUserStatusDto } from './dto/toggle-status.dto';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { CreateWeightPricingDto } from './dto/create-weight-pricing.dto';
import { UpdateWeightPricingDto } from './dto/update-weight-pricing.dto';
import { CreateSystemSettingDto } from './dto/create-system-setting.dto';
import { UpdateSystemSettingDto } from './dto/update-system-setting.dto';
import { SendNotificationDto } from './dto/send-notification.dto';
import { CreateDriverDto } from './dto/create-driver.dto';
import { AssignDriverDto } from './dto/assign-driver.dto';


@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard')
  getDashboard(): Promise<AdminDashboardData> {
    return this.adminService.getDashboard();
  }
  @Get('users')
  async findAllUsers(): Promise<UserI[]> {
    return this.adminService.getAllUsers();
  }
   @Get('users/search')
  async searchUsers(@Query('q') q: string): Promise<UserI[]> {
    return this.adminService.searchUsers(q);
  }
  @Patch('users/:id/status')
  toggleUserStatus(
    @Param('id') userId: string,
    @Body() dto: ToggleUserStatusDto,
    ): Promise<{ message: string }> {
    return this.adminService.toggleUserStatus(userId, dto.isActive);
  }
  @Get('parcels')
  async getAllParcels(): Promise<Parcel[]> {
    return this.adminService.getAllParcels();
  }
  @Patch('parcels/:id/status')
   async updateParcelStatus(
     @Param('id') parcelId: string,
     @Body('status') status: ParcelStatus,
    ): Promise<{ message: string }> {
     return this.adminService.updateParcelStatus(parcelId, status);
    }
    @Delete('parcels/:id')
    async softDeleteParcel(@Param('id') id: string): Promise<{ message: string }> {
      return this.adminService.softDeleteParcel(id);
    }
    @Patch('parcels/:id/restore')
    async restoreParcel(@Param('id') id: string): Promise<{ message: string }> {
      return this.adminService.restoreParcel(id);
    }
    @Get('parcels/:id/status-history')
    async getParcelStatusHistory(@Param('id') id: string): Promise<ParcelStatusHistory[]> {
      const history = await this.adminService.getParcelStatusHistory(id);
      if (!history) {
        throw new NotFoundException('Parcel not found');
      }
      return history;
    }
    @Get('parcels/deleted')
    async getDeletedParcels(): Promise<Parcel[]> {
      return this.adminService.getDeletedParcels();
    }
    @Post('parcels')
    async createParcel(@Body() dto: CreateParcelDto): Promise<{ message: string }> {
      return this.adminService.createParcel(dto);
    }
    @Post('notifications')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    async createNotification(@Body() dto: CreateNotificationDto) {
       return this.adminService.createNotification(dto);
    }

    @Get('notifications')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    async getAllNotifications() {
       return this.adminService.getAllNotifications();
    }

    @Get('notifications/filter')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    async filterNotifications(@Query('userId') userId?: string, @Query('parcelId') parcelId?: string) {
       return this.adminService.filterNotifications({ userId, parcelId });
    }
    @Patch('notifications/:id/read')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    async markAsRead(@Param('id') id: string) {
       return this.adminService.markAsRead(id);
    }
    @Post('weight-pricing')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    createWeightPricing(@Body() dto: CreateWeightPricingDto) {
      return this.adminService.createWeightPricing(dto);
    }

    @Get('weight-pricing')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    getAllWeightPricings() {
      return this.adminService.getWeightPricings();
    }

    @Patch('weight-pricing/:id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    updateWeightPricing(@Param('id') id: string, @Body() dto: UpdateWeightPricingDto) {
      return this.adminService.updateWeightPricing(id, dto);
    }

    @Get('weight-pricing/by-category/:category')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    getPricingByCategory(@Param('category') category: WeightCategory) {
      return this.adminService.getWeightPricingByCategory(category);
    }
    @Post('settings')
    createSetting(@Body() dto: CreateSystemSettingDto) {
      return this.adminService.createSystemSetting(dto);
    }

    @Patch('settings/:key')
    updateSetting(
    @Param('key') key: string,
    @Body() dto: UpdateSystemSettingDto,
    ) {
      return this.adminService.updateSystemSetting(key, dto);
    }

    @Get('settings/:key')
    getSetting(@Param('key') key: string) {
      return this.adminService.getSystemSetting(key);
    }

    @Delete('settings/:key')
    deleteSetting(@Param('key') key: string) {
      return this.adminService.deleteSystemSetting(key);
    }
    @Get('notifications')
    getNotifications() {
      return this.adminService.getAllNotifications();
    }

    @Post('notifications/send')
    sendNotification(@Body() dto: SendNotificationDto) {
      return this.adminService.sendNotification(dto);
    }

    @Patch('notifications/:id/read')
    markRead(@Param('id') id: string) {
      return this.adminService.markNotificationAsRead(id);
    }

    @Patch('notifications/:id/unread')
    markUnread(@Param('id') id: string) {
      return this.adminService.markNotificationAsUnread(id);
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Post('drivers')
    createDriver(@Body() dto: CreateDriverDto) {
       return this.adminService.createDriver(dto);
    }
    @Patch('parcels/:id/assign-driver')
    assignDriverToParcel(
       @Param('id') parcelId: string,
       @Body() dto: AssignDriverDto,
   ) {
        return this.adminService.assignDriverToParcel(parcelId, dto);
   } 







}
