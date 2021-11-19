import React from "react";
import styled from "styled-components";

import Router from "./components/Router";
import ImagesProvider from "./contexts/ImagesProvider";

function App() {
  return (
    <>
    <ImagesProvider>
      <AppContainer>
      <Router />
      </AppContainer>
    </ImagesProvider>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  width: 370px;
  min-height: 100vh;
  margin: 0 auto;

  @media(max-width:370px) {
    width: 100%;
  }
`;
