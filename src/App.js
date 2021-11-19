import React from "react";

import Router from "./components/Router";
import ImagesProvider from "./contexts/ImagesProvider";

function App() {
  return (
    <>
    <ImagesProvider>
      <Router />
    </ImagesProvider>
    </>
  );
}

export default App;
