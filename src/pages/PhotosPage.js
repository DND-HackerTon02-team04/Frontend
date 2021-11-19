// import { useParams } from "react-router"
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import ImageLists from '../components/ImageLists';
import useAxios from '../hooks/useAxios';

// https://..../upload/:roomId
const PhotosPage  = () => {
  // const params = useParams();
  const { roomId } = useParams();
  const [images, setImages] = useState([]);
  const [createRoomAPIState, createRoom] = useAxios('/room',{
    method: 'post'
  })
  const [getImagesAPIState, getImagesAPI ] = useAxios();

  useEffect(() => {
    console.log(roomId);
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

  useEffect(() => {
    if (createRoomAPIState.value) {
      console.log(createRoomAPIState.value);
    }
  },[createRoomAPIState]);

  useEffect(() => {
    if (getImagesAPIState.value) {
      const newImages = getImagesAPIState.value.map(data => data.download_url);
      console.log(newImages);
      setImages(newImages);
    }
  },[getImagesAPIState])

  return (
    <>
    {!getImagesAPIState.isLoading && <ImageLists initialImages={images} />}
    <ImageLayout />
    <Link to="/custom">꾸미기 페이지로!</Link>
    <CopyLinkButton onClick={handleCopyLink}>링크 공유하기!</CopyLinkButton>
    </>
  )
}

export default PhotosPage;

const ImageLayout = styled.div``;

const CopyLinkButton = styled.button``;