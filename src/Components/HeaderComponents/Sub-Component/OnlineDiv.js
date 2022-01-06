import React from "react";

const OnlineDiv = () => {
    return <React.Fragment>
        <div style={{ width: '60px', height: '25px', backgroundColor: 'green', position: 'relative', border: '1px solid green', borderRadius: '3px' }}>
            <p style={{ position: 'absolute', top: '-30%', left: '10%', fontSize: '12px', textAlign: 'center', color: 'white', fontWeight: 'bold' }}>ONLINE</p>
        </div>
    </React.Fragment>
}

export default OnlineDiv;