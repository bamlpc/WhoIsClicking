import { useEffect } from 'react';

import { axiosPrivate } from './axios.js';
import useAuth from './useAuth.js';
import useRefreshToken from './useRefreshToken.js';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken(); // ask for a new token
  const { auth } = useAuth(); // ask for auth to set/modifie Authorization header

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      //this handdle the inicial request
      (config: any) => {
        if (!config.headers['Authorization']) {
          //if Authorization doesn't exist we know this is not a retry/refresh
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`; //this set up the Authorization
        }
        return config;
      },
      (error) => Promise.reject(error), //this will handle any error
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response, //if the response is ok, do nothing
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          //if request if forbidden due to expired token and sent doesn't exist
          prevRequest.sent = true; //the sent property indicate if the function had try to refresh the token, we only want 1 try, not an infinite loop
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`; //updating the token
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error); //this will handle any error
      },
    );

    return () => {
      //clean up function to remove the interceptor
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
