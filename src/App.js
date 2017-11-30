import React, { Component } from 'react';
import Framework from './components/Framework';
import Welcome from './components/Welcome';
import LoginControl from './components/LoginControl';
import Clock from './components/Clock';
import Mailbox from './components/Mailbox';
import WarningBanner from './components/WarningBanner';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      unreadMessages: ['React', 'Re: React', 'Re:Re: React'],
      showWarning: false
    }
    this.frameworkInfo = {
      name: 'React JS',
      version: '16.1.1',
      author: 'Facebook Inc.'
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(
      prevState => ({showWarning: !prevState.showWarning})
    );
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
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
        </main>
        <footer id="footer">
          <small className="App-title">Welcome to {this.frameworkInfo.name}</small>
        </footer>
      </div>
    );
  }
}

export default App;
