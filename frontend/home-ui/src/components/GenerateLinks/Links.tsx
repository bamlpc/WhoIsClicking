import React, {useState} from 'react'

const Links = ({links}) => {
    //TODO: merge this two functions in one

    const [hunterButtonText, sethunterButtonText] = useState("Copy Hunter's Link");
    const [preyButtonText, setpreyButtonText] = useState("Copy Prey's Link");

    const copyHunter = () => {
        sethunterButtonText("Copied!");
        setpreyButtonText("Copy Prey's Link");
        navigator.clipboard.writeText(`https://${window.location.hostname}/hunter/${links.hunter}`);
    }

    const copyPrey = () => {
        sethunterButtonText("Copy Hunter's Link");
        setpreyButtonText("Copied!");
        navigator.clipboard.writeText(`https://${window.location.hostname}/hunter/${links.prey}`);
    }

    return (
        <div className="container">
            <div className="bg-dark text-secondary px-4 py-5 text-center w-100">
                <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Hunter</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">You are the hunter, access this link to see all the information of your preys, the people who baits and enters in the preys link.</p>
                    <p className="fs-5 mb-4">
                        Endpoint: 
                        <br/>
                        {links.hunter}
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={() => {copyHunter()}}>{hunterButtonText}</button>
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
                    <p className="fs-5 mb-4">
                        Endpoint: 
                        <br/>
                        {links.prey}
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={() => {copyPrey()}}>{preyButtonText}</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Links