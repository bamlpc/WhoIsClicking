import React from 'react'
import DeviceDetector from "device-detector-js";

//TODO: WORK on this interface
interface Scan {
    width: number,
    height: number,
    userAgent: string, 
    device: object, 
    scan: Promise<object>
}

const Scan = () => {
    
    const { innerWidth: width, innerHeight: height } = window;

    const deviceDetector = new DeviceDetector();
    
    const userAgent = navigator.userAgent;
    const device = deviceDetector.parse(userAgent);
    
    const scan = DenoScan();

    //TODO: Work on this object
    const scanner: Scan = {
        width, 
        height, 
        userAgent, 
        device, 
        scan
    }
    
    return scanner
}

const DenoScan = async ( ) => {

    const requestOptions = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            },
        referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url  
        }
    
    
    const fetchData = await fetch('http://localhost:8000/api/scanner', requestOptions)
    .then(response => {
        if(!response.ok) {
            throw Error('Fail to get links');
        } 
        return response.json();
    })
    .then(data =>  {
        return data})
    .catch(error => {
        console.error(error)
    })
    
    const resp = fetchData.prey

    
    return resp
    
};

export default Scan