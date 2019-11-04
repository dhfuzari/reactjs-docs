import React, { Component } from 'react';
import Toolbar from './Toolbar';

import './theme.css';

const ThemeContext = React.createContext('light');

class ContextApp extends Component {
  render() {
    return (
      <ThemeContext.Provider value="black">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

export default ContextApp;
