import React, { useCallback, useContext, useState } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const ImagesContext = React.createContext();

export const useImages = () => useContext(ImagesContext);

const ImagesProvider = ({ children }) => {
  const [imagesState, setImagesState] = useSessionStorage('images',{
    images: [],
    gridLayout: {
      id: 2,
      maxCount: 4
    },
    color : '',
  });

  const setImages = (images) => {
    setImagesState((prevImagesState) => ({...prevImagesState, images}));
  };

  const setGridLayout = (gridLayout) => {
    console.log(imagesState, gridLayout );
    setImagesState(imagesState => ({...imagesState, gridLayout}))
  };

  const setColor = (color)=> {
    setImagesState(imagesState => ({...imagesState, color}));
  };

  console.log(imagesState);

  return (
    <ImagesContext.Provider
      value={{imagesState, setImages, setGridLayout, setColor}}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesProvider;
