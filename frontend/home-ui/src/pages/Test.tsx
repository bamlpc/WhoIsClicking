//import { useTranslation } from 'react-i18next';
import Scan from './../components/Scanner'
import React, {useState} from 'react'

const Test = () => {
  const [data, setData] = useState({});
  
  const autoScan = async () => {
    const selfScan = Scan();
    setData(selfScan)
  }
  const cleanUp = async () => {
    setData({})
  }

  //TODO: TEMPORAL LOG
  addEventListener("keyup", () => console.log({data}))
  
  return (
    <div className="App-header">
      {
        data.width == undefined
        ? <>
          <h1> Press the button to start a self scan </h1>
          <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => autoScan()}>Self Scan</button>
        </> : <>
          <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => cleanUp()}>Clean up</button>
          <br></br>
          <h4>tab width: {data.width}</h4>
          <h4>tab height: {data.height}</h4>
          <h4>user agent: {data.userAgent}</h4>
          <h4>device: {data.width}</h4>
          <h4>scan: {data.width}</h4>
        </>
      }
    </div>
  );
};

export default Test;
