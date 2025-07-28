import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ParcelStatus } from '@prisma/client';

export class UpdateParcelStatusDto {
  @IsEnum(ParcelStatus)
  status: ParcelStatus;

  @IsOptional()
  @IsString()
  notes?: string;
}
