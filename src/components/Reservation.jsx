import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <form action="">
                <label htmlFor="">
                    Is Going: <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br/>
                <label htmlFor="">
                    Number of guests: <input type="number" name="numberOfGuests" onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default Reservation;