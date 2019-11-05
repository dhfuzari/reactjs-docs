import React from 'react';
import ThemeContext from './ThemeContext';
import ThemedButton from './ThemedButton';

function Toolbar(props) {
  return (
    <nav>
      {/* <ThemeContext.Consumer>
        {context => context.button.text}
      </ThemeContext.Consumer> */}
      <ThemedButton />
    </nav>
  );
}

export default Toolbar;
