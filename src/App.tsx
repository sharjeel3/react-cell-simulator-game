import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { globleStyles } from './ui-library/global';
import { CellSimulator } from './views/CellSimulator';

const GlobalStyles = createGlobalStyle`
  ${globleStyles}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <CellSimulator />
    </>
  );
};

export default App;
