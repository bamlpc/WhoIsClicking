import React from 'react'

const Results = ({data, cleanner}) => {

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
                    <div className="h-100 p-5 text-bg-dark border rounded-3">
                        <p>Information related to the client used to display this link.</p>
                        <hr></hr>
                        <div className="row align-items-md-stretch">
                            <div className="col-md-4">
                                <h2>Broser</h2>
                                <div className="fs-5">
                                    <p>Type: {data.device.client.type}</p>
                                    <p>Name: {data.device.client.name}</p>
                                    <p>Version: {data.device.client.version}</p>
                                    <p>Engine: {data.device.client.engine}</p>
                                    <p>Engine Version: {data.device.client.engineVersion}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Device</h2>
                                <div className="fs-5">
                                    <p>Width: {data.width}px</p>
                                    <p>Height: {data.height}px</p>
                                    <p>Brand: {data.device.device.brand}</p>
                                    <p>Model: {data.device.device.model}</p>
                                    <p>Type: {data.device.device.type}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h2>Operating System</h2>
                                <div className="fs-5">
                                    <p>Name: {data.device.os.name}</p>
                                    <p>Version: {data.device.os.version}</p>
                                    <p>Platform: {data.device.os.platform}</p>
                                </div>
                            </div>
                            <hr></hr>
                            <p className="fs-6">User Agent: {data.userAgent}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-dark border rounded-3">
                        <h2>Internet Provider Info</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results