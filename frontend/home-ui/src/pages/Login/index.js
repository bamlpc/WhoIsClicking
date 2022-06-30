import React, { useState, useEffect, useRef, useContext } from 'react';
import AuthContext from "../../context/AuthProvider.js";
import { useNavigate, useLocation } from "react-router-dom";
import Input from '../../commons/InputField/Input.js';
import Button from '../../commons/Button/Button.js';
import axios from "../../api/axios.js";

const LOGIN_URL = "/login";

const Login = (props) => {

  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errorRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errMsg, setErrMsg ] = useState('');
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

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

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({username: user, password: password}),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      //is redirecting 
      console.log(JSON.stringify(response?.data));
      const roles = response?.data?.roles;
      const accessToken = response?.data?.accessToken;
      setAuth({ user, password, roles, accessToken});
      setUser('');
      setPassword('');
      navigate(from, { replace: true });
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response');
        setIsLoggedIn(false);
      } else if (error.response?.status === 400) {
        setErrMsg('Missing Username or Password');
        setIsLoggedIn(false);
      } else if (error.response?.status === 401) {
        setErrMsg('Invalid Username or Password');
        setIsLoggedIn(false);
      } else {
        setErrMsg('Login Failed');
        setIsLoggedIn(false);
      }
    }
  }

    return (
      <div className="App">
        <header className="App-header">
          { isLoggedIn ?
             navigate('/') 
            :
            <div className='login-container'>
            <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Input  
              attribute={ {
                id: 'hunterlink', 
                name: 'username', 
                placeholder: 'Hunter link', 
                type: 'text' }} 
                handleChange={handleChange}
              />
              <Input  
              attribute={ {
                id: 'password', 
                name: 'password', 
                placeholder: 'password', 
                type: 'password' }} 
                handleChange={handleChange}
                toogle={true}
              /> 
              <div><Button onClick={handleSubmit}
              type="purple"
              buttonSize="--loginPage"
              >Login</Button></div>     
          </div>
          }
        </header>
      </div>
    );
}

export default Login;