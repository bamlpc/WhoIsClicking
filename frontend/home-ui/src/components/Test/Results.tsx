import React from 'react'

const Results = ({data, cleanner}) => {
    const device = data.device;
    const isp = data.denoScan.isp;
    
    return (
        <div className="container">
            <div className="p-5 mb-4 bg-dark border rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Scanner Results</h1>
                    <p className="col-md-12 fs-4">The information below can be innacurate in some cases where the user is using masking connections such as VPNs or certain browsers.</p>
                    <button type="button" className="btn btn-lg btn-primary" onClick={() => cleanner()}>Clean up</button>
                </div>
            </div>
            <div className="row align-items-md-stretch col-md-12">
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-dark border rounded-3">
                        <h2>Device Information</h2>
                        <hr></hr>
                        <div className="row align-items-md-stretch">
                            <div className="col-md-4">
                                <h2>Browser</h2>
                                <div className="fs-5">
                                    <p>Type: {device.client.type}</p>
                                    <p>Name: {device.client.name}</p>
                                    <p>Version: {device.client.version}</p>
                                    <p>Engine: {device.client.engine}</p>
                                    <p>Engine Version: {device.client.engineVersion}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Device</h2>
                                <div className="fs-5">
                                    <p>Width: {data.width}px</p>
                                    <p>Height: {data.height}px</p>
                                    <p>Brand: {device.device.brand}</p>
                                    <p>Model: {device.device.model}</p>
                                    <p>Type: {device.device.type}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>O.S.</h2>
                                <div className="fs-5">
                                    <p>Name: {device.os.name}</p>
                                    <p>Version: {device.os.version}</p>
                                    <p>Platform: {device.os.platform}</p>
                                </div>
                            </div>
                            <hr></hr>
                            <p className="fs-6">User Agent: {data.userAgent}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-dark border rounded-3">
                        <h2>Internet Provider Information</h2>
                        <hr></hr>
                        <div className="row align-items-md-stretch">
                            <div className="col-md-6">
                                <h2>Geolocalization</h2>
                                <div className="fs-5">
                                    <p>Continent: {isp.continent_name}</p>
                                    <p>Country: {isp.country_name}</p>
                                    <p>State: {isp.state_prov}</p>
                                    <p>District: {isp.district}</p>
                                    <p>City: {isp.city}</p>
                                    <p>Zip Code: {isp.zipcode}</p>
                                    <p>Calling Code: {isp.calling_code}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2>ISP</h2>
                                <div className="fs-5">
                                    <p>Internet Provider: {isp.isp}</p>
                                    <p>Connection Type: {isp.connection_type}</p>
                                    <p>Organization: {isp.organization}</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="fs-5">
                            <p>IP: {data.denoScan.prey.ip}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Results