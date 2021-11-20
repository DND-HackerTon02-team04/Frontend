import React, {  useContext, useState } from "react";

const FinalImageContext = React.createContext();

export const useFinalImage = () => useContext(FinalImageContext);

const FinalImageProvider = ({ children }) => {
  const [finalImage, setFinalImage]= useState(null);

  return (
    <FinalImageContext.Provider
      value={[finalImage, setFinalImage]}
    >
      {children}
    </FinalImageContext.Provider>
  );
};

export default FinalImageProvider;
