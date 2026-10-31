export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
  role: string;
}

export interface UserSession {
  username: string;
  role: string;
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
  username: string;
  password: string;
  role: string;
}