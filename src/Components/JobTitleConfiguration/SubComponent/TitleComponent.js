import React from "react";
import { Link } from "react-router-dom";

const TitleComponent = (props) => {
    const { to, text } = props;
    return <React.Fragment>
        <div className="top-section">
            <div className="text-group">
                <p className="title-text">HR CONFIGURATION <span className="sub-title-text">Job Title</span></p>
            </div>

            <div className="btn-group">
                <Link to={to} className="btn-add-job-title">{text}</Link>
                {/* `${name}` */}
            </div>
        </div>
    </React.Fragment>
}

export default TitleComponent;