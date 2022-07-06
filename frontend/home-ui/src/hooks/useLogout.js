import axiosPrivate from '../api/axios.js';
import useAuth from './useAuth.js';

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axiosPrivate('/user/logout', {
        withCredentials: true,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
