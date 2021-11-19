// import { useParams } from "react-router"
import { useCallback, useEffect } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import ImageLists from '../components/ImageLists';
import { useImages } from '../contexts/ImagesProvider';
import useAxios from '../hooks/useAxios';

// https://..../upload/:roomId
const PhotosPage  = () => {
  // const params = useParams();
  const { roomId } = useParams();
  const [images, setImages] = useImages([]);
  const navigate = useNavigate();
  const [createRoomAPIState, createRoom] = useAxios('/room',{
    method: 'post'
  });
  const [getImagesAPIState, getImagesAPI ] = useAxios();

  useEffect(() => {
    if (roomId === 'new') {
      createRoom();
    }else {
      getImagesAPI({
        url: `/room/${roomId}`
      });
    }
  },[]);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
  },[]);

  const handleImagesChange = useCallback((images) => {
    setImages(images);
  },[])

  useEffect(() => {
    if (createRoomAPIState.value?.room_code) {
      const roomId = createRoomAPIState.value.room_code;
      navigate(`/photos/${roomId}`, {replace: true});
    }
  },[createRoomAPIState, navigate]);

  useEffect(() => {
    if (getImagesAPIState.value) {
      const newImages = getImagesAPIState.value?.image_list;
      if (newImages){
        setImages(newImages);
      }
    }
  },[getImagesAPIState])

  return (
    <>
    {!getImagesAPIState.isLoading &&
    <ImageLists 
      images={images}
      roomId={roomId} 
      imagesChange={handleImagesChange} 
      />
    }
    <ImageLayout />
    <Link to="/custom">꾸미기 페이지로!</Link>
    <CopyLinkButton onClick={handleCopyLink}>링크 공유하기!</CopyLinkButton>
    </>
  )
}

export default PhotosPage;

const ImageLayout = styled.div``;

const CopyLinkButton = styled.button``;