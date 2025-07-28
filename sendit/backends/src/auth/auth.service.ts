import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AuthResponse } from '../interfaces/auth.interface';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly mail: MailService,
  ) {}

  /** User signup */
  async register(dto: RegisterDto): Promise<AuthResponse> {
    const inUse = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (inUse) {
      throw new BadRequestException('Email already registered');
    }

    const password = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        phone: dto.phone,
        password,
        role: 'USER',
        firstLogin: false, // ✅ Normal users don't need first login
      },
    });

    await this.mail.sendMail({
      to: user.email,
      subject: 'Welcome to Send-It',
      template: 'welcome',
      context: { firstName: user.firstName, lastName: user.lastName },
    });

    const accessToken = await this.jwt.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      accessToken,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phone: user.phone ?? undefined,
        isActive: user.isActive,
        firstLogin: user.firstLogin,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  }

  /** User login */
  async login(dto: LoginDto): Promise<AuthResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.jwt.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      accessToken,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phone: user.phone ?? undefined,
        isActive: user.isActive,
        firstLogin: user.firstLogin, // ✅ Used by frontend to enforce password change
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  }

  /** Complete first login (driver only) */
  async completeFirstLogin(
    userId: string,
    dto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new UnauthorizedException('User not found');

    if (user.role !== 'DRIVER' || user.firstLogin === false) {
      throw new BadRequestException('Not eligible for first-time password change');
    }

    const valid = await bcrypt.compare(dto.currentPassword, user.password);
    if (!valid) throw new BadRequestException('Current password is incorrect');

    const newHash = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        password: newHash,
        firstLogin: false,
      },
    });

    return { message: 'Password updated successfully. You can now continue.' };
  }

  /** Change password while logged in (normal case) */
  async changePassword(
    userId: string,
    dto: ChangePasswordDto,
  ): Promise<string> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException('User not found');

    const ok = await bcrypt.compare(dto.currentPassword, user.password);
    if (!ok) throw new BadRequestException('Current password incorrect');

    const newHash = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { password: newHash },
    });

    await this.mail.sendMail({
      to: user.email,
      subject: 'Password changed',
      template: 'password-changed',
      context: { firstName: user.firstName, lastName: user.lastName },
    });

    return 'Password changed successfully';
  }
}
