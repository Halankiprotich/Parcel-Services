import { IsNotEmpty, IsEnum, IsString, IsNumber } from 'class-validator';
import { ParcelStatus, WeightCategory } from '@prisma/client';

export class CreateParcelDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  weight: number;

  @IsEnum(WeightCategory)
  category: WeightCategory;

  @IsEnum(ParcelStatus)
  status: ParcelStatus;

  @IsString()
  @IsNotEmpty()
  senderId: string;

  @IsString()
  @IsNotEmpty()
  receiverId: string;

  @IsString()
  @IsNotEmpty()
  pickupAddress: string;

  @IsString()
  @IsNotEmpty()
  deliveryAddress: string;

  @IsNumber()
  basePrice: number;

  @IsNumber()
  totalPrice: number;
}
