import React from 'react';
import ThemeContext from './ThemeContext';

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <button theme={context.button.color}>{context.button.text}</button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemedButton;
