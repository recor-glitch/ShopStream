export interface IUser {
  id: Number;
  name: string;
  email: string;
}

export interface IauthenticatedUserResponse {
  token: string;
  success: boolean;
}
