import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth.js';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Logout = () => {
  //language manager
  const { t } = useTranslation();

  const [users, setUsers] = useState(); //to save the logout state
  const axiosPrivate = useAxiosPrivate(); //to ensure we are using access tokens

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController(); //use to cancel request if the component unmount

    const loginOut = async () => {
      try {
        const response = await axiosPrivate.get('/user/logout', {
          signal: controller.signal,
        });
        isMounted && navigate('/', { state: { from: location }, replace: true }); // if mounted do
      } catch (err) {
        //if not login
        //redirect to /login and store your location, so after login in you'll be brought  back here
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    loginOut();

    return () => {
      //clean up function
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('welcome_message')}</h1>
        <h1>TODO: this logout and redirect to homepage</h1>
      </header>
    </div>
  );
};

export default Logout;
