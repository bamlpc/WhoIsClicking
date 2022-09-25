import React from 'react'
import DeviceDetector from "device-detector-js";

const Scan = () => {
    const { innerWidth: width, innerHeight: height } = window;
    console.log("width",width);
    console.log("height",height);

    const deviceDetector = new DeviceDetector();
    const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
    const device = deviceDetector.parse(userAgent);
    DenoScan();
    console.log(device);
}

const DenoScan = async ( ) => {

    /*const [data, setData] = React.useState(null);
    
      React.useEffect(() => {
        fetch('/api/scanner')
          .then((res) => res.text())
          .then((data) => setData(data.message));
      }, []);
    
      console.log(data);*/
    
        fetch('/api/scanner', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url  
        } )
        .then(response => response.json())
        .then(data => fetchData = data)
        .catch(error => {console.log(error)})

    console.log(fetchData);
};

export default Scan