import React, { Component } from 'react';

class Tick extends Component {
    constructor(props) {
        super(props);
        this.updateTime = this.updateTime.bind(this);

        this.state = {
            time: null
        }        
    }

    updateTime() {  
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    componentDidMount() {
        const timer = setInterval(this.updateTime(), 1000);
    }

    render() {
        return(
            <div>
                <h4>It is {this.state.time}</h4>
            </div>
        );
    }
}

export default Tick;