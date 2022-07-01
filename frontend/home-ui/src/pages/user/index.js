import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from '../../hooks/useAuth.js'

const User = () => {

    //language manager
    const { t } = useTranslation()

    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate(); //to ensure we are using access tokens
    const navigate = useNavigate();         
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();   //use to cancel request if the component unmount

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/user', { // route to user homepage
                    signal: controller.signal
                });
                isMounted && setUsers(response.data); // if mounted do
            } catch (err) { //if not login
                //redirect to /login and store your location, so after login in you'll be brought  back here
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => { //clean up function
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <article>
            <h2>TODO: user homepage</h2>
        </article>
    );
};

export default User;