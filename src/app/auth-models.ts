import { Role } from './user';

export interface AuthRequest {
  username?: string;
  password?: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  username: string;
  role: string;
}

export interface RegisterRequest {
  username?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  role?: Role;
}
