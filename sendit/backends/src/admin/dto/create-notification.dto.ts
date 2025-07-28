import { IsNotEmpty, IsOptional, IsString, IsUUID, IsIn } from 'class-validator';

export class CreateNotificationDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsOptional()
  parcelId?: string;

  @IsString()
  @IsIn(['EMAIL', 'SMS'])
  type: string;

  @IsString()
  @IsOptional()
  subject?: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
