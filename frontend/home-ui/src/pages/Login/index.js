import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import AuthContext from "../../context/AuthProvider.js";
import Input from '../../commons/InputField/Input.js';
import Button from '../../commons/Button/Button.js';
import axios from "../../api/axios.js";

const LOGIN_URL = "/login";

const Login = () => {

  //language manager
  const { t } = useTranslation()

  //needed to store the successful login
  const { setAuth } = useContext(AuthContext);

  //TODO: WATCH THE VIDEO OF LOGIN FORM TO SEE WHERE TO PUT THE USER REF
  const userRef = useRef();
  const errorRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  //after login in redirect you from where you came or the home page
  const from = location.state?.from?.pathname || "/";

  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errMsg, setErrMsg ] = useState('');

  function handleChange(name, value) {
    if (name === 'username') {
      setUser(value)
    } else {
      setPassword(value)
      }
  }
  
  useEffect(() => {
    setErrMsg('');
}, [user, password])


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    //TODO: REMOVE THIS LOG
    console.log(JSON.stringify({username: user, password: password}))
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({username: user, password: password}),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      //getting the user's role
      const roles = response?.data?.roles;
      //getting the accessToken
      const accessToken = response?.data?.accessToken;
      //store the information
      setAuth({ user, password, roles, accessToken});
      //cleaning up the form
      setUser('');
      setPassword('');
      //redirecting
      navigate(from, { replace: true });
      //TODO: remove this log
      console.log("succes", response.status)
    } catch (error) {
      if (!error?.response) {                           //if there is no response
        setErrMsg('No Server Response');
      } else if (error.response?.status === 400) {      //if for some reason you reach the backend without email/password field
        setErrMsg('Missing Username or Password');
      } else if (error.response?.status === 401) {      //if wrong information 
        setErrMsg('Invalid Username or Password');
      } else {                                          //if anything else
        setErrMsg('Login Failed');
      }
      errorRef.current.focus();                         //set the focus on the error
    }
  }

    return (
      <div className="App">
        <header className="App-header">
            <div className='login-container'>
            <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Input  
              attribute={ {
                id: 'hunterlink', 
                name: 'username', 
                placeholder: 'Username', 
                type: 'text' }} 
                handleChange={handleChange}
                ref={userRef}
              />
              <Input  
              attribute={ {
                id: 'password', 
                name: 'password', 
                placeholder: 'Password', 
                type: 'password' }} 
                handleChange={handleChange}
                toogle={true}
              /> 
              <div><Button onClick={handleSubmit}
              type="purple"
              buttonSize="--loginPage"
              >Login</Button></div>     
          </div>
        </header>
      </div>
    );
}

export default Login;