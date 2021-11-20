import React, { useCallback, useContext } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const ImagesContext = React.createContext();

export const useImages = () => useContext(ImagesContext);

const ImagesProvider = ({ children }) => {
  const [imagesState, setImagesState] = useSessionStorage('images',{
    images: [],
    gridLayout: {
      id: 0,
      maxCount: 2
    },
    color : '',
  });

  const setImages = useCallback((images) => {
    setImagesState(imagesState => ({...imagesState, images }))
  }, []);

  const setGridLayout = useCallback((gridLayout) => {
    console.error('layoutChange!');
    setImagesState(imagesState => ({...imagesState, gridLayout}))
  },[]);

  const setColor = useCallback((color)=> {
    setImagesState(imagesState => ({...imagesState, color}));
  },[]);

  return (
    <ImagesContext.Provider
      value={{imagesState, setImages, setGridLayout, setColor}}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesProvider;
