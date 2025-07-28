import {
  IsNotEmpty,
  IsEnum,
  IsNumber,
  IsString,
  IsOptional,
  IsEmail,
} from 'class-validator';
import { WeightCategory } from '@prisma/client';

export class CreateParcelDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNumber()
  weight: number;

  @IsEnum(WeightCategory)
  category: WeightCategory;

  @IsNotEmpty()
  @IsString()
  receiverId: string;

  @IsNotEmpty()
  @IsString()
  pickupAddress: string;

  @IsOptional()
  @IsNumber()
  pickupLatitude?: number;

  @IsOptional()
  @IsNumber()
  pickupLongitude?: number;

  @IsNotEmpty()
  @IsString()
  deliveryAddress: string;

  @IsOptional()
  @IsNumber()
  deliveryLatitude?: number;

  @IsOptional()
  @IsNumber()
  deliveryLongitude?: number;

   @IsEmail()
   receiverEmail: string;
}
