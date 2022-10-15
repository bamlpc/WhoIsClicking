interface UserLoginResquest {
  username: string;
  password: string;
}

interface UserLoginResponse {
  roles: number;
  accessToken: string;
}

interface UserSigninResquest {
  username: string;
  password: string;
}

interface UserSigninResponse {
  success: boolean;
  status?: number;
  error?: string;
}

export type {
  UserLoginResponse,
  UserLoginResquest,
  UserSigninResponse,
  UserSigninResquest,
};
