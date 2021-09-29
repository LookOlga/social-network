import React from "react";
import preloader from "../../../assets/images/spinner/spinner.svg";

import './preloader.css';

const Preloader = (props) => {
    return (
        <div className="preloader">
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;