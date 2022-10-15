//import { useTranslation } from 'react-i18next';
import Scan from '../components/Test/Scanner'
import Welcome from '../components/Test/Welcome'
import Results from '../components/Test/Results'
import React, {useState} from 'react'

const Test = () => {
  const [data, setData] = useState({});
  
  const autoScan = async () => {
    const selfScan = await Scan();
    setData(selfScan)
  }
  const cleanUp = async () => {
    setData({})
  }
  
  return (
    <div className="App-header">
        {data.width == undefined
          ? <Welcome autoScan={autoScan}  />
          : <Results data={data} cleanner={cleanUp}  />
        }
    </div>
  );
};

export default Test;
