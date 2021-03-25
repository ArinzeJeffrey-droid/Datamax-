import React from 'react';
import "./loader.style.css"

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-inner">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    );
}

export default Loader;