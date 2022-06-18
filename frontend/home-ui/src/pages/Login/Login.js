import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

export const Login = (props) => {

  const navigate = useNavigate();
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordError, setPasswordError ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ hasError, setHasError ] = useState(false);

  function handleChange(name, value) {
    if (name === 'username') {
      setUser(value)
      hasError(false);
    } else {
        if ( value.length < 6 ) {
          setPasswordError(true)
          hasError(false);
        } else { 
            setPasswordError(false)
            setPassword(value)
            hasError(false);
          }
      }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === 'test' && param.password === '123456') {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setHasError(true);
      }
    } else {
      setIsLoggedIn(false);
      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password }
    console.log('account: ', account)
    if(account) {
      ifMatch(account)
    }
  }
    return (
      <div className="App">
        <header className="App-header">
          { isLoggedIn ?
             navigate('/hunter:id') 
            :
            <div className='login-container'>
            { hasError && <label className='label-alert'> Incorrect login information </label>}
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
                type: 'text' }} 
                handleChange={handleChange}
                param={passwordError}
              /> 

              { passwordError && <label className='label-error'> Password is required </label> }
              
              <Button onClick={handleSubmit}>Login</Button>     
          </div>
          }
        </header>
      </div>
    );
  }