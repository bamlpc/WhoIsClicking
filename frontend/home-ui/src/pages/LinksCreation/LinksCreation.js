import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../App.css';
import CreateLinks from './components/CreateLinks.js';
import Button from '../../commons/Button/Button.js'
import Input from '../../commons/InputField/Input.js'

export const LinksCreation = () => {

  const navigate = useNavigate();

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
          <Input
          attribute={ {
            id: 'password', 
            name: 'password', 
            placeholder: 'Enter your desired password', 
            type: 'password' }} 
            //handleChange={handleChange}
            toogle={true}
            //param={passwordError}
          />
        </div>
        <div className="app">
         <Button onClick={ () => {
            CreateLinks()
            navigate('/generated')
          }}
          type="purple"
          buttonSize="--linksGenerator"
          > Create Link </Button>
        </div>
      </header>
    </div>
  );
}
