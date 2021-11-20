import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { ReactComponent as Logo } from "../assets/photosLogo.svg";
import styled from "styled-components";
import { useImages } from "../contexts/ImagesProvider";
import Photos from "../components/Photos";
import { Button } from "../components/Buttons";
import { BsFillShareFill } from "react-icons/bs";
import ImageLists from "../components/ImageLists";
import { useFinalImage } from "../contexts/FinalImageProvider";

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 53px 15px 13px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const IconDiv = styled.div`
  width: 53px;
  height: 53px;
  background: #fff98f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
`;

const Icon = styled(BsFillShareFill)`
  width: 30px;
  height: 30px;
  color: #b8e6cf;
`;

function ResultPage() {
  const [finalImage, setFinalImage] = useFinalImage();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  },[]);

  const handleSave = () => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = finalImage;
    link.download = '스티커 사진';
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {
        loading
        ? <LoadingPage loading={loading} />
        : (
      <ContainerDiv>
        <Logo style={{ marginBottom: 30 }} />
        <img src={finalImage} />;
        <ButtonsContainer>
          <IconDiv>
            <Icon />
          </IconDiv>
          <Button text="이미지 저장하기" onClick={handleSave} />
        </ButtonsContainer>
      </ContainerDiv>
        )
    } 
    </>
  );
}

export default ResultPage;

const FinalImage = styled.img`
  object-fit: cover;
`