import React, { Component } from 'react';
import Framework from './components/Framework'
import Welcome from './components/Welcome'
import Tick from './components/Tick'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.frameworkInfo = {
      name: 'React JS',
      version: '16.1.1',
      author: 'Facebook Inc.'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to {this.frameworkInfo.name}
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p> <Framework frameworkInfo={this.frameworkInfo} /> </p>        
        <div> <Welcome name="Daniel H. Fuzari" /> </div>        
        <div> <Tick /> </div>        
      </div>
    );
  }
}

export default App;
