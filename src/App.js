import React, { Component } from 'react';
import Framework from './components/Framework';
import Welcome from './components/Welcome';
import LoginControl from './components/LoginControl';
import Clock from './components/Clock';
import Mailbox from './components/Mailbox';
import WarningBanner from './components/WarningBanner';
import NumbersList from './components/NumbersList';
import Blog from './components/Blog';
import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/FlavorForm';
import Reservation from './components/Reservation';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      unreadMessages: ['React', 'Re: React', 'Re:Re: React'],
      showWarning: false,
      posts: [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm'}
      ]
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
          <Welcome name="Lorem ipsum" />
          <Clock />             
          <LoginControl />
          <Mailbox unreadMessages={this.state.unreadMessages} />
          <WarningBanner warn={this.state.showWarning} />
          <NumbersList />
          <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
          <Blog posts={this.state.posts}/>
          <NameForm />
          <EssayForm />
          <FlavorForm />
          <Reservation />
        </main>
        <footer id="footer">
          <small className="App-title">Welcome to {this.frameworkInfo.name}</small>
        </footer>
      </div>
    );
  }
}

export default App;
