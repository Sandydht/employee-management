export interface RegisterRequest {
  username: string;
  fullname: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface RegisterResponse {
  status: string;
  data: {
    id: number;
    username: string;
    email: string;
    fullname: string;
    phone_number: string;
    photo_url: string;
    role: string;
  }
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  access_token: string;
}

export interface LogoutResponse {
  status: string;
  message: string;
}

export interface RefreshResponse {
  status: string;
  access_token: string;
}