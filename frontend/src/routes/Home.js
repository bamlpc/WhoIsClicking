import React from 'react';
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

let links;
function Create_Link() {
  alert('Educational propose only');
  API_call();
      }
function API_call() {
      links = fetch('http://localhost:81/') || "Not working";

    };

export const Home = () => {

  let navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
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