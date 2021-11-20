// import { useParams } from "react-router"
import { useCallback, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImageLists from "../components/ImageLists";
import LayoutSelector from "../components/LayoutSelector";
import { useImages } from "../contexts/ImagesProvider";
import useAxios from "../hooks/useAxios";
import { ReactComponent as PhotosLogo } from "../assets/photosLogo.svg";
import { ArrowButton } from "../components/Buttons";

// https://..../upload/:roomId
const PhotosPage = () => {
  // const params = useParams();
  const { roomId } = useParams();
  const {imagesState:{images, gridLayout} , setImages, setGridLayout } = useImages();
  const navigate = useNavigate();
  const [createRoomAPIState, createRoom] = useAxios("/room", {
    method: "post",
  });
  const [getImagesAPIState, getImagesAPI] = useAxios();

  useEffect(() => {
    if (roomId === "new") {
      createRoom();
    } else {
      getImagesAPI({
        url: `/room/${roomId}`,
      });
    }
  }, [roomId]);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
  }, []);

  const handleImagesChange = useCallback((images) => {
    setImages(images);
  }, []);

  useEffect(() => {
    if (createRoomAPIState.value?.room_code) {
      const roomId = createRoomAPIState.value.room_code;
      navigate(`/photos/${roomId}`, { replace: true });
    }
  }, [createRoomAPIState, navigate]);

  useEffect(() => {
    if (getImagesAPIState.value) {
      const newImages = getImagesAPIState.value?.image_list;
      if (newImages) {
        setImages(newImages);
      }
    }
  }, [getImagesAPIState]);

  return (
    <>
      <Wrapper>
        <Flex>
          <PhotosLogo 
            style={{
              position:'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }} 
          />
          <LayoutSelector />
        </Flex>
        <div style={{padding: '0 10px 0 10px', height: 573.27 , width: 332.5 }}>
          <ImageLists
            roomId={roomId}
            imagesChange={handleImagesChange}
          />
        </div>
        <ImageLayout />
        <ButtonsContainer>
        <CopyLinkButton onClick={handleCopyLink}>
          친구에게 링크 공유하기
        </CopyLinkButton>
        <ArrowButton onClick={() =>navigate('/custom')} arrow='right' />
        </ButtonsContainer>
      </Wrapper>
    </>
  );
};

export default PhotosPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  justify-content: flex-end;
  position: relative;
  padding-right: 10px;
  margin: 60px 0 60px 0;
`;

const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

`;

const ImageLayout = styled.div``;

const CopyLinkButton = styled.button`
  width: 262px;
  height: 56.5px;
  border-radius: 33px;
  background: #FFFFFF;
  border: none;
`;

