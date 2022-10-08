import React from 'react'

const Links = ({links}) => {
    return (
        <div className="container">
            <div className="bg-dark text-secondary px-4 py-5 text-center w-100">
                <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Hunter</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">You are the hunter, access this link to see all the information of your preys, the people who baits and enters in the preys link.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Copy Hunter's Link</button>
                    </div>
                </div>
                </div>
            </div>
            <hr></hr>
            <div className="bg-dark text-secondary px-4 py-5 text-center w-100">
                <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Prey</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">This is the link that you have to share with the person you want to identify. Once anyone click this link we will scan all their information and show it to you through your hunter link.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Copy Prey's Link</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Links