import React, { Component } from 'react';

class Framework extends Component {
    constructor(props) {
        super(props);            
    }

    formatText() {
        return `${this.props.frameworkInfo.name} ${this.props.frameworkInfo.version} - ${this.props.frameworkInfo.author}`;
    }
    
    render() {
        return (
            <strong>{this.formatText()}</strong>
        );
    }
}

export default Framework;