import { UserI } from './user.interface';
import { UserRole } from '@prisma/client';

export interface AuthResponse {
  accessToken: string;
  user: UserI;
}

export interface JwtPayloadI {
  sub: string;
  email: string;
  role: UserRole;
}