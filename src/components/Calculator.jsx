import React from 'react';
import BoilingVeredict from './BoilingVeredict';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value});            
    }

    render() {
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Enter temperature em celsius:</legend>
                <input type="text" value={this.state.temperature} onChange={this.handleChange} />
                <BoilingVeredict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

export default Calculator;