import axios from 'axios';
import { AUTH_URL} from '../constant/urls'

export default axios.create({
  baseURL: AUTH_URL
});

// Every logedin request must be done with axios private
export const axiosPrivate = axios.create({
  baseURL: AUTH_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});