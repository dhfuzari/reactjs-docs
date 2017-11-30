import React, { Component } from 'react';
import Framework from './components/Framework';
import Welcome from './components/Welcome';
import LoginControl from './components/LoginControl';
import Clock from './components/Clock';
import Mailbox from './components/Mailbox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      unreadMessages: ['React', 'Re: React', 'Re:Re: React']
    }
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
        </header>
        <main>        
          <Framework frameworkInfo={this.frameworkInfo} />
          <Welcome name="Daniel H. Fuzari" />
          <Clock />             
          <LoginControl />
          <Mailbox unreadMessages={this.state.unreadMessages} />
        </main>
        <footer id="footer">
          <small className="App-title">Welcome to {this.frameworkInfo.name}</small>
        </footer>
      </div>
    );
  }
}

export default App;
