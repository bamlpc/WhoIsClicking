import {Routes, Route } from 'react-router-dom';
import {Home} from './routes/Home.js';
import {Generated} from './routes/Generated.js';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}                /> 
          <Route path='/generated' element={<Generated />}  /> 
        </Routes>
    </>
  );
}

export default App;
