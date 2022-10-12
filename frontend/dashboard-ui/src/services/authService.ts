import axios from 'axios';

const API_URL = "/api/login";

const signup = (email, password) => {
  return axios
  .post(API_URL, {email, password})
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  })
}