import { LOGIN_URL, LOGOUT_URL, SIGNIN_URL } from '../constant/urls';
import {
  UserLoginResponse,
  UserLoginResquest,
  UserSigninResponse,
  UserSigninResquest,
} from './userRequest_types';

// Login
const userLoginResquest = async (
  loginInfo: UserLoginResquest,
): Promise<UserLoginResponse | Error> => {
  const requestOptions: RequestInit = {
    method: 'POST',
    body: JSON.stringify(loginInfo),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  };

  const rawResponse = await fetch(LOGIN_URL, requestOptions);
  const response = await rawResponse.json();

  return response;
};

// Logout TODO: CHECK TYPE Void
const userLogoutResquest = async (): Promise<void> => {
  const rawResponse = await fetch(LOGOUT_URL);
  const response = await rawResponse.json();

  return response;
};

// Signin
const userSigninResquest = async (
  signinInfo: UserSigninResquest,
): Promise<UserSigninResponse> => {
  const requestOptions: RequestInit = {
    method: 'POST',
    body: JSON.stringify(signinInfo),
    cache: 'no-cache',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  };

  const rawResponse = await fetch(SIGNIN_URL, requestOptions);
  const response = await rawResponse.json();

  return response;
};

export { userLoginResquest, userLogoutResquest, userSigninResquest };
