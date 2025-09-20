export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: 'OK' | 'error';
  access_token: unknown;
}