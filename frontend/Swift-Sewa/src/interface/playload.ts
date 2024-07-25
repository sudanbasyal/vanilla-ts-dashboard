export interface JwtPayload {
  id: number;
  role: string[];
  email?: string;
  exp?: number;
  iat?: number;
  permissions?: string[];
}
