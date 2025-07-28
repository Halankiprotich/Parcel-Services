import { IsString, MinLength } from 'class-validator';

export class ChangeDriverPasswordDto {
  @IsString()
  @MinLength(6)
  newPassword: string;
}
