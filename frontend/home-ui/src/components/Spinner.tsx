import React from 'react'

const Spinner = ({data, cleanner}) => {
    return (
        <div className="container">
            <div className="spinner-border">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner