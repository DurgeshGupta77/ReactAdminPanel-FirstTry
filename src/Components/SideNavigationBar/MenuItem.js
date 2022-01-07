import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHome } from 'react-icons/fa';
import { Link } from "react-router-dom";


const MenuItem = (props) => {

    const { name, subMenus, iconClassName, onClick, to } = props;
    const [isExpand, setIsExpand] = useState(false);

    console.log(props);

    return <li onClick={props.onClick}>
        <Link to={to} className="menu-item" onClick={() => setIsExpand(!isExpand)}>
            <div className="menu-icon">
                <FaHome />
                {/* <FontAwesomeIcon icon={iconClassName.toString()} /> */}
                {/* <i class={iconClassName}></i> */}
            </div>
            <p>{name}</p>
        </Link>
        {
            subMenus && subMenus.length > 0 ?
                <ul className={`sub-menu ${isExpand ? 'active' : ''}`}>
                    {subMenus.map((menu, index) =>
                        <li key={index}>
                            <Link to={menu.to}>{menu.name}</Link>
                        </li>
                    )}
                </ul> : null
        }

    </li>
};

export default MenuItem;