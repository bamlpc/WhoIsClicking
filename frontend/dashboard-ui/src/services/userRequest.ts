import { LOGIN_URL, LOGOUT_URL, SIGNIN_URL, RECOVERY_URL } from '../constant/urls';
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

// Recover TODO: type de esta response
const recoveryTokenResquest = async (
  email: string,
) => {
  const requestOptions: RequestInit = {
    method: 'POST',
    body: JSON.stringify(email),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  };

  const url = `${RECOVERY_URL}/token`
  // TODO: CHANGE EL ENDPOINT DEL BACKEND
  const rawResponse = await fetch(url, requestOptions);
  const response = await rawResponse.json();

  return response;
};

// Recover TODO: type de esta response
const resetPasswordRequest = async (
  token: string,
) => {
  const requestOptions: RequestInit = {
    method: 'POST',
    body: JSON.stringify(token),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  };

  const url = `${RECOVERY_URL}/email`
  // TODO: CHANGE EL ENDPOINT DEL BACKEND
  const rawResponse = await fetch(url, requestOptions);
  const response = await rawResponse.json();

  return response;
};

export { userLoginResquest, userLogoutResquest, userSigninResquest, recoveryTokenResquest, resetPasswordRequest };
