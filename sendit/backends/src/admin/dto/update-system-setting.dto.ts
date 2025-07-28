import { IsOptional, IsString } from 'class-validator';

export class UpdateSystemSettingDto {
  @IsOptional()
  @IsString()
  value?: string;
}
