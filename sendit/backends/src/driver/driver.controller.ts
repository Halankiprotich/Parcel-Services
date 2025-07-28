import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { UpdateParcelStatusDto } from './dto/update-parcel-status.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('driver')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.DRIVER)
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  /** 📦 Get all parcels assigned to the driver */
  @Get('parcels')
  getAssignedParcels(@Req() req) {
    return this.driverService.getAssignedParcels(req.user.sub);
  }

  /** ✅ Progress parcel status step-by-step (PICKED_UP → IN_TRANSIT → DELIVERED) */
  @Patch('parcels/:id/progress')
  updateProgressStatus(
    @Req() req,
    @Param('id') parcelId: string,
    @Body() body: { newStatus: 'PICKED_UP' | 'IN_TRANSIT' | 'DELIVERED'; note?: string },
  ) {
    return this.driverService.updateParcelProgressionStatus(
      req.user.sub,
      parcelId,
      body.newStatus,
      body.note,
    );
  }

  /** ❌ Mark failed delivery or other status changes like CANCELLED */
  @Patch('parcels/:id/status')
  markDeliveryIssue(
    @Req() req,
    @Param('id') parcelId: string,
    @Body() dto: UpdateParcelStatusDto,
  ) {
    return this.driverService.markParcelDeliveryIssue(
      req.user.sub,
      parcelId,
      dto,
    );
  }

  /** 📊 Driver dashboard: metrics for delivered, pending, etc. */
  @Get('dashboard')
  getDashboard(@Req() req) {
    return this.driverService.getDriverMetrics(req.user.sub);
  }

  /** 📍 Track location update for a parcel */
  @Patch('parcels/:id/location')
  updateLocation(
    @Req() req,
    @Param('id') parcelId: string,
    @Body() dto: UpdateLocationDto,
  ) {
    return this.driverService.updateLocation(
      req.user.sub,
      parcelId,
      dto.latitude,
      dto.longitude,
    );
  }

  /** 📍 Get the latest known location of a parcel */
  @Get('parcels/:id/location')
  getLatestLocation(@Param('id') parcelId: string, @Req() req) {
    return this.driverService.getLatestParcelLocation(parcelId, req.user.sub);
  }
}
