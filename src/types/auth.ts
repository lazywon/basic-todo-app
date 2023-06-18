export interface UserInfo {
  email: string;
  password: string;
}

export interface AuthInfo {
  email: string;
  token: string;
}

export interface AuthResponse {
  access_token?: string;
}
