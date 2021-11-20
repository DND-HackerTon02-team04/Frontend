import React, { useCallback, useContext, useState } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const ImagesContext = React.createContext();

export const useImages = () => useContext(ImagesContext);

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useSessionStorage("images", []);
  const [gridLayout, setGridLayout] = useState({
    id: 1,
    row: 1,
    column: 1,
  });
  const updateImages = useCallback((newImages) => {
    setImages(newImages);
  }, []);

  return (
    <ImagesContext.Provider
      value={[images, updateImages, gridLayout, setGridLayout]}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesProvider;
