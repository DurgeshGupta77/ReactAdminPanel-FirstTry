import React from "react";
import './style/index.css'
import EnglishFlag from "../../../assets/Flags/gb.png"
import { FaAngleDown } from "react-icons/fa"

const Flag = () => {
    return <React.Fragment>
        <div className="FlagContainer">
            <div>
                <img src={EnglishFlag} alt="Flag of Great Britain" />
            </div>
            <p>English</p>
            <FaAngleDown className="drop-down-icon" />
        </div>
    </React.Fragment>
};

export default Flag;
