import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { WeightCategory } from '@prisma/client';

export class CreateWeightPricingDto {
  @IsEnum(WeightCategory)
  category: WeightCategory;

  @IsNumber()
  minWeight: number;

  @IsOptional()
  @IsNumber()
  maxWeight?: number;

  @IsNumber()
  pricePerKg: number;

  @IsNumber()
  basePrice: number;
}
