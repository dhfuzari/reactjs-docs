import React, { Component } from 'react';
import FormatDate from './FormatDate';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.clickMe = this.clickMe.bind(this);
        this.state = { 
            date: new Date(),
            isToogleOn: false 
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    clickMe(e, str) {
        e.preventDefault();
        this.setState((prevState) => ({
            isToogleOn: !prevState.isToogleOn
        }));
        console.log(e, str);        
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is <FormatDate date={this.state.date} /></h2>
                <p>
                    <a href="#" onClick={(e) => {this.clickMe(e, 'TESTE AB')}}>Toogle button - {this.state.isToogleOn.toString()}</a>
                </p>
            </div>
        );
    }
}

export default Clock;