import { IsNumber, IsOptional } from 'class-validator';

export class UpdateWeightPricingDto {
  @IsOptional()
  @IsNumber()
  minWeight?: number;

  @IsOptional()
  @IsNumber()
  maxWeight?: number;

  @IsOptional()
  @IsNumber()
  pricePerKg?: number;

  @IsOptional()
  @IsNumber()
  basePrice?: number;
}
