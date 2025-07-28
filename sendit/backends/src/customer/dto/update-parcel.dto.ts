import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateParcelDto {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  deliveryAddress?: string;

  @IsOptional()
  @IsNumber()
  deliveryLatitude?: number;

  @IsOptional()
  @IsNumber()
  deliveryLongitude?: number;
}
