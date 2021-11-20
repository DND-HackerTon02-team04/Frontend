import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

import Router from "./components/Router";
import ImagesProvider from "./contexts/ImagesProvider";

function App() {
  return (
    <ImagesProvider>
      <AppContainer>
        <Router />
        <GlobalStyles />
      </AppContainer>
    </ImagesProvider>
  );
}

export default App;

const AppContainer = styled.div`
  width: 370px;
  min-height: 100vh;
  margin: 0 auto;
  background: linear-gradient(#68b1e6, #b8e6cf);
  @media (max-width: 370px) {
    width: 100%;
  }
`;
