import { IsString, IsOptional } from 'class-validator';

export class SendNotificationDto {
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  parcelId?: string;

  @IsString()
  type: 'EMAIL' | 'SMS';

  @IsOptional()
  @IsString()
  subject?: string;

  @IsString()
  message: string;
}
