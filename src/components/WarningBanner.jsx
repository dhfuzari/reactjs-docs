import React, {Component} from 'react';

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    return(
        <h2 className="warning">Warning!</h2>
    );
}

export default WarningBanner;