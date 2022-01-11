import React, { useEffect, useState } from "react";
import './index.css';
import ProfilePicture from '../../assets/login_cover.jpg';
import { FaMapMarkerAlt, FaDharmachakra, FaHome, FaBookOpen, FaDesktop } from "react-icons/fa";
import MenuItem from "./MenuItem";

const SideMenu = (props) => {

    const [isInactive, setIsInactive] = useState(false);

    useEffect(() => {
        if (isInactive) {
            document.querySelectorAll('.sub-menu').forEach((el) => {
                el.classList.remove("active");
            })
        }

    }, [isInactive]);

    const menuItems = [
        { name: "Dashboard", to: "/", iconClassName: 'FaHome' },
        {
            name: "Content",
            to: "/content",
            iconClassName: 'FaBookOpen',
            subMenus: [
                { name: 'Courses', to: '/courses' },
                { name: 'Videos', to: '/videos' },
                { name: 'Documentation', to: '/documentation' },
            ]
        },
        {
            name: "Job Title",
            to: "/job-title",
            iconClassName: 'FaDesktop'
        }
    ];

    // const test = () => {
    //     console.log(props);
    // }

    // return <div className="side-menu inactive">
    return <div className={`side-menu ${isInactive ? 'inactive' : ''}`}>
        {/* This div will hold our Profile and Settings */}
        <div className="top-section">
            <div className="profile-image">
                <img src={ProfilePicture} alt="Profile" />
            </div>
            <div className="user-info">
                <p>Victoria Baker</p>
                <div>
                    <FaMapMarkerAlt className="location-pin" />
                    <p>Santa Ana, CA</p>
                </div>
            </div>
            <div className="settings-icon-div">
                <FaDharmachakra onClick={() => { setIsInactive(!isInactive) }} />
            </div>

            {/* <button onClick={test}>
                Testing Props
            </button> */}
        </div>
        <div className="main-menu">
            <ul>
                {
                    menuItems.map((menuItem, index) => {
                        return <MenuItem key={index} name={menuItem.name} to={menuItem.to} subMenus={menuItem.subMenus || []} iconClassName={menuItem.iconClassName}
                            onClick={() => {
                                if (isInactive) {
                                    setIsInactive(false);
                                }
                            }} />
                    })
                }
            </ul>
        </div>
    </div>
}

export default SideMenu;