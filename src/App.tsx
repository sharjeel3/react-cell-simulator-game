import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { globleStyles } from './ui-library/global';

const GlobalStyles = createGlobalStyle`
  ${globleStyles}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
    </>
  );
};

export default App;
