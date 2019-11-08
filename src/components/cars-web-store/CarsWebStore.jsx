import React, { Component } from 'react';
import MyProvider from './MyProvider';
import ProductList from './ProductList.jsx';

class CarsWebStore extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to my web store</h1>
          </header>
          {/* Pass props twice */}
          <ProductList />
        </div>
      </MyProvider>
    );
  }
}

export default CarsWebStore;
