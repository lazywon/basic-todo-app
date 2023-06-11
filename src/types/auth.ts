export interface UserInfo {
  userid: string;
  password: string;
}

export interface AuthInfo {
  userid: string;
  token: string;
}

export interface AuthResponse {
  msg: string;
  token?: string;
}
