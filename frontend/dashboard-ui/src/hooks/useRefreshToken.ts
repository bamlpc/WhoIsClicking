import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  //TODO: create type and refresh fetch function and delete axios
  const refresh = async () => {
    const response = await axios.get('/refresh', {
      withCredentials: true
    });
    setAuth((prev) => {
      console.log(prev); //TODO: DELETE THIS LOGS
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken }
    })
    return response.data.accessToken;
  }
  return refresh;
};

export default useRefreshToken;