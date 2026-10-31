export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
  role: string;
  fullName?: string;
  email?: string;
}

export interface UserSession {
  username: string;
  role: string;
  fullName?: string;
  email?: string;
}

export interface UserResponse {
  id: number;
  username: string;
  role: string;
  enabled: boolean;
}

export interface UserRequest {
  username: string;
  password?: string;
  role: 'ADMIN' | 'SALES' | 'PURCHASE' | 'ACCOUNTS' | string;
}

export interface RegisterRequest {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role: 'SALES' | 'PURCHASE' | 'ACCOUNTS' | string;
}

export interface RegisterResponse {
  id: number;
  fullName: string;
  username: string;
  email: string;
  role: string;
  message: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword?: string;
}
