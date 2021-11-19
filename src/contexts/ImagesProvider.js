import React, { useCallback, useContext } from 'react';
import useSessionStorage from '../hooks/useSessionStorage';

const ImagesContext  = React.createContext();

export const useImages = () => useContext(ImagesContext);

const ImagesProvider = ({children}) => {
  const [images, setImages] = useSessionStorage('images',[]);

  const updateImages = useCallback((newImages)=> {
    setImages(newImages);
  },[]);

  return <ImagesContext.Provider
    value={[images, updateImages]}
  >
    {children}
  </ImagesContext.Provider>
}

export default ImagesProvider;