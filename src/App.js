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
import Calculator from './components/Calculator';
import WelcomeDialog from './components/WelcomeDialog';
import SplitPane from './components/SplitPane';
import SignUpDialog from './components/SignUpDialog';
import FilterableProductTable from './components/thinking-in-react/FilterableProductTable';

import logo from './logo.svg';
import './App.css';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

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
          {/* <Framework frameworkInfo={this.frameworkInfo} />
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
          <Calculator />
          <WelcomeDialog/>                             
          <SplitPane 
            left={<Clock />}
            right={<WelcomeDialog/>}
          />
          <SignUpDialog /> */}
          <FilterableProductTable products={PRODUCTS} />
        </main>

        {/* 
        <footer id="footer">
          <small className="App-title">Welcome to {this.frameworkInfo.name}</small>
        </footer> 
        */}
      </div>
    );
  }
}

export default App;
