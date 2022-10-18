import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const logout = async () => {
  const axiosPrivate = useAxiosPrivate();
  try {
    const response = await axiosPrivate.post('/logout');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default logout;
