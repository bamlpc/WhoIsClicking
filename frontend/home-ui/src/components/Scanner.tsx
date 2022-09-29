import React from 'react'
import DeviceDetector from "device-detector-js";

//TODO: WORK on this interface
interface Scan {
    width: number,
    height: number,
    userAgent: string, 
    device: object, 
    denoScan: Promise<object>
}

const Scan = () => {
    
    const { innerWidth: width, innerHeight: height } = window;

    const deviceDetector = new DeviceDetector();
    
    const userAgent = navigator.userAgent;
    const device = deviceDetector.parse(userAgent);
    
    const denoScan = DenoScan();

    console.log(denoScan);

    //TODO: Work on this object
    const scanner: Scan = {
        width, 
        height, 
        userAgent, 
        device, 
        denoScan
    }
    
    return scanner
}

const DenoScan = async ( ) => {

    const requestOptions = {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
            },
        referrerPolicy: 'no-referrer'
        }
    
    
    const fetchData = await fetch('http://localhost:8000/api/scanner', requestOptions)
    .then((response) => response.json())
    .catch(error => {
        console.error(error)
    })
    
    const resp = fetchData
    return resp
};

export default Scan