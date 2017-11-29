import React, { Component } from 'react';
import FormatDate from './FormatDate';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.clickMe = this.clickMe.bind(this);
        this.state = { date: new Date() };
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

    clickMe(e) {
        e.preventDefault();
        console.log('This link was clicked!');
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
                    <a href="#" onClick={this.clickMe}>Click me!</a>
                </p>
            </div>
        );
    }
}

export default Clock;