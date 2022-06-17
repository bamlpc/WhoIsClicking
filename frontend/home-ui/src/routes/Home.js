import { React } from 'react';
import '../App.css';
import { Button } from '../components/Button.js';
import { useNavigate } from "react-router-dom";
import { CreateLinks } from '../components/CreateLinks.js';

export const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>
         <Button onClick={ () => {
            CreateLinks()
            navigate('/generated')
          }}> Create Link </Button>
        </p>
      </header>
    </div>
  );
}

