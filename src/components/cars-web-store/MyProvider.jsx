import React, { Component } from 'react';
import MyContext from './MyContext';

class CarsWebStore extends Component {
  state = {
    cars: {
      car001: { name: 'Honda', price: 100 },
      car002: { name: 'BMW', price: 150 },
      car003: { name: 'Mercedes', price: 200 },
    },
  };

  incrementCarPrice = selectedID => {
    // a simple method that manipulates the state
    const cars = Object.assign({}, this.state.cars);
    cars[selectedID].price = cars[selectedID].price + 1;
    this.setState({
      cars,
    });
  };

  decrementCarPrice = selectedID => {
    // a simple method that manipulates the state
    const cars = Object.assign({}, this.state.cars);
    cars[selectedID].price = cars[selectedID].price - 1;
    this.setState({
      cars,
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          cars: this.state.cars,
          incrementCarPrice: this.incrementCarPrice,
          decrementCarPrice: this.decrementCarPrice,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default CarsWebStore;
