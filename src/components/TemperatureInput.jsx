import React from 'react';
import BoilingVeredict from './BoilingVeredict';

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

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={this.handleChange} />   
                <BoilingVeredict celsius={temperature} />             
            </fieldset>
        ) ;
    }
}

export default TemperatureInput;