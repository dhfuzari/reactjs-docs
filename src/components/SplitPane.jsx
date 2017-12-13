import React from 'react';

export default function SplitPane(props) {
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-rigth">
                {props.right}
            </div>
        </div>
    );
}