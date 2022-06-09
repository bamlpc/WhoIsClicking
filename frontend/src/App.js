import logo from './logo.svg';
import './App.css';
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
  transition: ease background-color 0.25s;
  &:hover {
    background-color: #304ffe;`

let links;
function Create_Link() {
  API_call();
  alert('Educational propose only');
  }
function API_call() {
  links = fetch('http://localhost:81/') || "Not working";
  console.log(links)
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         <Button onClick={Create_Link}> Create Link </Button>
        </p>
        <p>{links}</p>
      </header>
    </div>
  );
}

export default App;
