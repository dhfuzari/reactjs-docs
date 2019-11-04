import React from 'react';

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <button theme={this.context}>Click-me</button>;
  }
}

export default ThemedButton;
