import axios from 'axios';

//with this, everytime you call axios it will hit the backend
const BASE_URL = '/api'; //this is going through nginx
//if you want to avoid nginx http://localhost:8000/api

export default axios.create({
    baseURL: BASE_URL
});

//this one has attached interceptors to refresh tokens
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});