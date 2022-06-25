import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from '../../commons/InputField/Input.js'
import Button from '../../commons/Button/Button.js'

const Login = (props) => {

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
            <div>{ hasError && <label className='label-alert'> Incorrect login information </label>}</div>
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
                param={passwordError}
              /> 

              <div>{ passwordError ? <label className='label-error'> Password is required </label> : "" }</div>
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