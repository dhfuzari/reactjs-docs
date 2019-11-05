import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ThemeContext from './ThemeContext';
import './theme.css';

const stateContext = {
  button: {
    color: 'green',
    text: 'My Button',
  },
};

class ContextApp extends Component {
  state = {
    ...stateContext,
  };

  changeThemeColor = e => {
    this.setState({
      button: {
        ...this.state.button,
        color: e.target.value,
      },
    });
  };

  changeThemeText = e => {
    this.setState({
      button: {
        ...this.state.button,
        text: e.target.value,
      },
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <fieldset>
          <label for="themeColors">Change theme color! </label>
          <select
            name="themeColors"
            id="themeColors"
            onChange={e => this.changeThemeColor(e)}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </fieldset>
        <fieldset>
          <label for="themeColors">Change theme text! </label>
          <input type="text" onChange={e => this.changeThemeText(e)} />
        </fieldset>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

export default ContextApp;
