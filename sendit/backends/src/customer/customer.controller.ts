import { Controller, Post, Body, UseGuards, Request, Get, Param, Patch } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CustomerService } from './customer.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { CustomerParcelI } from '../interfaces/customer-parcel.interface';
import { TrackedParcelI } from '../interfaces/tracked-parcel.interface';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';

@Controller('customer')
@UseGuards(JwtAuthGuard)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('send')
  sendParcel(
    @Request() req,
    @Body() dto: CreateParcelDto,
  ): Promise<CustomerParcelI> {
    return this.customerService.sendParcel(req.user.sub, dto);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  @Get('parcels')
  getMyParcels(@Request() req) {
    return this.customerService.getMyParcels(req.user.sub);
 }

  @Get('track/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  trackParcel(
    @Request() req,
    @Param('id') parcelId: string,
  ): Promise<TrackedParcelI> {
    return this.customerService.trackParcel(req.user.sub, parcelId);
  }

  @Patch('cancel/:id')
  cancelParcel(
    @Request() req,
    @Param('id') parcelId: string,
  ): Promise<{ message: string }> {
    return this.customerService.cancelParcel(req.user.sub, parcelId);
  }
  @Post('parcel')
  createParcel(
    @Request() req,
    @Body() dto: CreateParcelDto,
  ): Promise<{ message: string; trackingId: string }> {
    return this.customerService.createParcel(req.user.sub, dto);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  @Get('notifications')
  getMyNotifications(@Request() req) {
    return this.customerService.getMyNotifications(req.user.sub);
  }
  @Patch('notifications/:id/read')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  markAsRead(@Request() req, @Param('id') id: string) {
    return this.customerService.markNotificationAsRead(req.user.sub, id);
  }
  @Patch('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  updateProfile(@Request() req, @Body() dto: UpdateProfileDto) {
    return this.customerService.updateProfile(req.user.sub, dto);
  }
  @Patch('change-password')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  changePassword(@Request() req, @Body() dto: ChangePasswordDto) {
    return this.customerService.changePassword(req.user.sub, dto);
  }
  @Get('parcel-metrics')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  getParcelMetrics(@Request() req) {
    return this.customerService.getParcelMetrics(req.user.sub);
  }
  @Patch('parcels/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('USER')
  editParcel(
    @Request() req,
    @Param('id') parcelId: string,
    @Body() dto: UpdateParcelDto,
  ): Promise<{ message: string }> {
    return this.customerService.editParcel(req.user.sub, parcelId, dto);
  }

}
