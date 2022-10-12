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
  username: string;
  password: string;
}

export type {
  UserLoginResponse,
  UserLoginResquest,
  UserSigninResponse,
  UserSigninResquest,
};
