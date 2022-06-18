import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import '../../App.css';
import './LinksCreation.css';
import { CreateLinks } from './components/CreateLinks.js';
import { Button } from './components/Button.js';

export const LinksCreation = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const toogleButton = () => {
    setShowPassword(showPassword => !showPassword);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="app">
          <div className="input-element-wrapper">
            <input className="password-field" type={showPassword ? "text" : "password"} 
              placeholder="Enter your desired password" />
            <button className="button" onClick={toogleButton}>
              { showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
            </button>
          </div>
        </div>
        <div className="app">
         <Button onClick={ () => {
            CreateLinks()
            navigate('/generated')
          }}> Create Link </Button>
        </div>

      </header>
    </div>
  );
}
