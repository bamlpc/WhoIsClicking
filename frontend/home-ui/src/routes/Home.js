import { React, useState, useEffect} from 'react';
import '../App.css';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Button = styled.button `
  background-color: #3d5afe;
  font-size: 1.5em;
  color: white;
  padding: 20px 30px;
  border-radius: 8px;
  outline: 1;
  box-shadow: 0 2px 2px 0 #263238;
  cursor: pointer;
  transition: ease background-color 0.25s;
  &:hover {
    background-color: #304ffe;`

export const Home = () => {

  const [showLinks, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  let navigate = useNavigate();

  function Create_Link() {
    alert('Educational propose only');
      setTimeout( () => {   
      fetch('http://localhost:81/generate', { mode: 'no-cors'})
        .then(response => {
            if(!response.ok) {
                  throw Error('Fail to get links');
            }
          console.log(response);  
          return response.json()})
        .then(data => { showLinks(data); setIsPending(false); }) //this is just an idea for setup a loading screen
        .catch(error => { console.log(error); });
  
        }, 1000);
      }
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
            Create_Link()
            navigate('/generated') 
          }}> Create Link </Button>
        </p>
      </header>
    </div>
  );
}