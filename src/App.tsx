import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '@containers/Header';

import reset from '@/style-guide/reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
      </div>
    );
  }
}

export default App;
