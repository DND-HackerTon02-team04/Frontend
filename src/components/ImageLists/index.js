import { useCallback, useEffect } from "react"
import ImageUploader from "./ImageUploader";
import useAxios from "../../hooks/useAxios";
import Image from "../base/Image";
import Layout from "../Layout";
import { useImages } from "../../contexts/ImagesProvider";

let reader = null;
const imageFormData = new FormData();

const ImageLists = ({ roomId, imagesChange, ...props}) => {
  const [postNewImageAPIState, postNewImage] = useAxios();
  const {imagesState:{images, gridLayout:{maxCount}}} = useImages();

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
  }, [images]);


  return (
      <Layout {...props}>
      {images?.filter((_,idx)=>idx<maxCount).map((image, idx) => <div style={{width:'100%', height:'100%'}} key={idx}>
        <Image src={image} alt={`${idx}`} />
      </div>)}
      {images.length < maxCount &&
        (
          <ImageUploader
            droppable
            alt='uploadImage'
            onChange={handleFileChanged}
          />
        )
      }
      </Layout>
  )
}

export default ImageLists;

