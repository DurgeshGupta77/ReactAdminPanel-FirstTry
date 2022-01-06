import React from "react";
import LoginCover from "../../../assets/login_cover.jpg"
import { FaAngleDown } from "react-icons/fa"

const ProfileIcon = () => {
    return <React.Fragment>
        <div className="ProfileIcon">
            <img className="ProfileIcon-Cover-Photo" src={LoginCover} alt="Cover of Logged In User" />
            <p>Victoria</p>
            <FaAngleDown />
        </div>
    </React.Fragment>
}

export default ProfileIcon;