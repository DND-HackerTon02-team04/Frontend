import { useCallback, useEffect } from "react"
import ImageUploader from "./ImageUploader";
import styled from 'styled-components';
import useAxios from "../../hooks/useAxios";

let reader = null;
const imageFormData = new FormData();

const ImageLists = ({images, roomId, imagesChange, ...props}) => {
  const [postNewImageAPIState, postNewImage] = useAxios();

  const makeImageDataToUrl = useCallback(changedFile => {
    if (!changedFile) {
      
      return;
    }

    reader?.readAsDataURL(changedFile);
  }, []);

  const handleFileChanged = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    const changedFile = e.dataTransfer
      ? e.dataTransfer.files[0]
      : e.target.files[0];
    if (!changedFile) {
      return;
    }

    if (changedFile.type.includes('image')){
      imageFormData.set('file', changedFile);

      roomId && postNewImage({
        method: 'post',
        url: `/room/${roomId}`,
        data: imageFormData
      });
      makeImageDataToUrl(changedFile);
    }
  },[makeImageDataToUrl, roomId, postNewImage])

  useEffect(() => {
    if (!reader) {
      reader = new FileReader();
    }

    const handleLoadedUrl = () => {
      imagesChange && imagesChange([...images, reader?.result]);
    }

    reader?.addEventListener('load', handleLoadedUrl);

    return () => reader?.removeEventListener('load', handleLoadedUrl);
  }, []);


  return (
    <StyledImageList {...props}>
      {images?.map((image, idx) => <li key={idx}>
        <img style={{width:150, height:150}} src={image} alt={`${idx}`} />
      </li>)}
      <ImageUploader
        droppable
        width={150}
        height={150}
        alt='uploadImage'
        onChange={handleFileChanged}
      />
    </StyledImageList>
  )
}

export default ImageLists;

const StyledImageList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

`;