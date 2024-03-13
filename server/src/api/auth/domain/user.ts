export interface IUser {
  id: Number;
  name: string;
  email: string;
}

export interface IcreateUserResponse {
  token: string;
  success: boolean;
}
