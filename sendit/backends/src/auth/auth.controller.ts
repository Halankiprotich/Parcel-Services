import {
  Body,
  Controller,
  Post,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthResponse } from '../interfaces/auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  /** Public user registration */
  @Post('register')
  register(@Body() dto: RegisterDto): Promise<AuthResponse> {
    return this.auth.register(dto);
  }

  /** Login endpoint (all roles) */
  @Post('login')
  login(@Body() dto: LoginDto): Promise<AuthResponse> {
    return this.auth.login(dto);
  }

  /** Normal password change (after login) */
  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  changePassword(
    @Req() req,
    @Body() dto: ChangePasswordDto,
  ): Promise<string> {
    return this.auth.changePassword(req.user.sub, dto);
  }

  /** 🚚 First-time login password reset for DRIVERS */
  @UseGuards(JwtAuthGuard)
  @Patch('first-login')
  completeFirstLogin(
    @Req() req,
    @Body() dto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    return this.auth.completeFirstLogin(req.user.sub, dto);
  }
}
