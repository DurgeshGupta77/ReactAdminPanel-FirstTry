import React, { useState } from "react";
import Logo from "../../../assets/logo.png"
import { FaAlignJustify, FaHubspot } from "react-icons/fa"
import './styles/AppHeader.css'

import Flag from "../Sub-Component/Flag";
import OnlineDiv from "../Sub-Component/OnlineDiv";
import Messages from "../Sub-Component/Messages";
import ProfileIcon from "../Sub-Component/ProfileIcon";
import SideMenu from "../../SideNavigationBar/SideMenu";

const AppHeader = () => {

    const [isInactive, setIsInactive] = useState(false);

    const sendStatus = () => {
        console.log("Hello World!");
        setIsInactive(!isInactive);
        console.log(isInactive);
        <SideMenu isInactive={isInactive} />
    }

    return <React.Fragment>
        <header>
            <div className="header-left">
                <div className="logo-box">
                    <img className="logo-image" src={Logo} alt="Logo" />
                </div>
                <div className="header-left-items">
                    <FaAlignJustify onClick={sendStatus} className="header-left-items-icons" />
                    <FaHubspot className="header-left-items-icons" />
                    <OnlineDiv className="header-left-items-status" />
                </div>
            </div>

            <div className="header-right">
                <Flag />
                <Messages />
                <ProfileIcon />
            </div>
        </header>
    </React.Fragment>
}

export default AppHeader;