import React, {useState} from 'react'
import Spinner from '../Spinner'

const Welcome = ({autoScan}) => {
    const [spinner, setSpinner] = useState(false); 
    return (
        <div className="container">
        {!spinner
            ? <>
                <h1> Press the button to start a self scan </h1>
                <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => {
                        autoScan();
                        setSpinner(true);
                    }}>Self Scan</button>
            </>
            :<Spinner />
        }
        </div>
    )
}

export default Welcome