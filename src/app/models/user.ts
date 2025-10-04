export interface ProfileResponse {
  status: string;
  data: UserData;
}

export interface UserData {
  id: string;
  photoUrl: string;
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
  role: string;
}