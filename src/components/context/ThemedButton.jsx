import React from 'react';

class ThemedButton extends React.Component {
  render() {
    return;
    <ThemeContext.Consumer>
      <button theme={this.context}>Click-me</button>;
    </ThemeContext.Consumer>;
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
