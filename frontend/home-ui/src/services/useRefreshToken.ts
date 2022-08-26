import axios from './axios.js';
import useAuth from './useAuth.js';

const useRefreshToken = () => {
  const { setAuth } = useAuth(); //to grab the old access Token

  const refresh = async () => {
    const response = await axios.get('/user/refresh', {
      withCredentials: true,
    });
    setAuth((prev: any) => {
      //override the old access Token with the new one
      //TODO: delete this logs
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken; //return the new Token to be used in requests.
  };
  return refresh;
};

export default useRefreshToken;
