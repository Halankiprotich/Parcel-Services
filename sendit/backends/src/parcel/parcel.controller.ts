import { Controller, Get, Param } from '@nestjs/common';
import { ParcelService } from './parcel.service';

@Controller('parcel')
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Get(':id/location')
  getLatestLocation(@Param('id') parcelId: string) {
    return this.parcelService.getLatestLocation(parcelId);
  }
  @Get(':id/locations') // Note the plural
  getLocationHistory(@Param('id') parcelId: string) {
    return this.parcelService.getLocationHistory(parcelId);
  }
}
