import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Router from "./components/Router";
import ImagesProvider from "./contexts/ImagesProvider";

function App() {
  return (
    <>
      <ImagesProvider>
        <Router />
        <GlobalStyles />
      </ImagesProvider>
    </>
  );
}

export default App;
