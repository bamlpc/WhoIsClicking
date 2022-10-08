import React, {useState} from 'react'
import Spinner from '../Spinner'

const Welcome = ({generate}) => {
    const [spinner, setSpinner] = useState(false); 
    return (
        <div className="container">
        {!spinner
            ? <>
                <h1> Press the button to generate your links </h1>
                <button type="button" className="btn btn-lg btn-outline-primary" onClick={() => {
                        generate();
                        setSpinner(true);
                    }}>Self Scan</button>
            </>
            :<Spinner />
        }
        </div>
    )
}

export default Welcome