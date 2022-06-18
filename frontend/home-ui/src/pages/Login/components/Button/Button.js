import styled from 'styled-components';

const Button = styled.button `
background-color: #3d5afe;
font-size: 1.5em;
color: white;
padding: 20px 30px;
border-radius: 8px;
outline: 1;
box-shadow: 0 2px 2px 0 #263238;
cursor: pointer;
margin-top: 30px;
width: 50%;
transition: ease background-color 0.25s;
&:hover {
  transition: all 0.2s ease-in-out;
  background: #304ffe;
  color: #18ffff;
}`

export default Button;