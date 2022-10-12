interface UserLoginResquest {
  username: string;
  password: string;
}

interface UserLoginResponse {
  roles: string;
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
