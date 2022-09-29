//import { useTranslation } from 'react-i18next';
import Scan from './../components/Scanner'
import Results from './../components/Results'
import React, {useState} from 'react'

const Test = () => {
  const [data, setData] = useState({});
  
  const autoScan = async () => {
    const selfScan = await Scan();
    //TODO: REMOVE THIS CONSOLE LOG
    console.log({selfScan});
    setData(selfScan)
  }
  const cleanUp = async () => {
    setData({})
  }
  
  return (
    <div className="App-header">
      {
        data.width == undefined
        ? <>
          <h1> Press the button to start a self scan </h1>
          <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => autoScan()}>Self Scan</button>
        </> : <>
        <Results data={data} cleanner={cleanUp}  /> 
        <br></br>
        <br></br>
        </>
      }
    </div>
  );
};

export default Test;
