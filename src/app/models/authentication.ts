export interface RegisterRequest {
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface RegisterResponse {
  status: string;
  data: {
    id: number;
    username: string;
    email: string;
    fullname: string;
    phoneNumber: string;
    photoUrl: string;
    role: string;
  }
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  accessToken: string;
}

export interface LogoutResponse {
  status: string;
  message: string;
}

export interface RefreshRequest {
  userId: string;
}

export interface RefreshResponse {
  status: string;
  accessToken: string;
}