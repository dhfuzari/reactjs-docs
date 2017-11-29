import React, { Component } from 'react';
import Framework from './components/Framework';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.frameworkInfo = {
      name: 'React JS',
      version: '16.1.1',
      author: 'Facebook Inc.'
    };

    this.toogleIsLoggedIn = this.toogleIsLoggedIn.bind(this);
  }

  toogleIsLoggedIn() {
    this.setState((prevState) => ({isLoggedIn: !prevState.isLoggedIn}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header>
        <main>        
          <Framework frameworkInfo={this.frameworkInfo} />
          <Welcome name="Daniel H. Fuzari" />
          <Clock />   
          <button onClick={this.toogleIsLoggedIn}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
          <Greeting isLoggedIn={this.state.isLoggedIn}/>
        </main>
        <footer>
          <small className="App-title">Welcome to {this.frameworkInfo.name}</small>
        </footer>
      </div>
    );
  }
}

export default App;
