import React from "react";
import { FaComments } from "react-icons/fa";

import "./style/index.css"

const Messages = () => {
    const numOfMessages = 2;
    return <React.Fragment>
        <div className="inbox">
            <FaComments className="inbox-icon" />
            <div className="inbox-message-number">
                {numOfMessages}
            </div>
        </div>
    </React.Fragment>
}

export default Messages;