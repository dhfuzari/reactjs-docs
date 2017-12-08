import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = { temperature: ''};
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return null;
    }
}

export default TemperatureInput;