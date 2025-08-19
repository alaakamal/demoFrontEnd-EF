export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  HR_MANAGER = 'HR_MANAGER'
}

export interface User {
  userId: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}
