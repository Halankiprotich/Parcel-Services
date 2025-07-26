export * from './user.dto';
export * from './register.schema';
export * from './login.schema';
export * from './update-user.schema';
export * from './driver.schemas';
export interface JwtPayload {
  sub: number;
  email: string;
  role: string;
}

export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}
