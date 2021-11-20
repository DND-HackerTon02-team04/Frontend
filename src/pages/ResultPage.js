import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { ReactComponent as Logo } from "../assets/photosLogo.svg";
import styled, { keyframes } from "styled-components";
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

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 30px;
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

const imgAnimation = keyframes`
  0% {
    top: -500;
  }
  35% {
    /* left: 30%; */
    top: -400px;
  }
  38%{
    /* left: 29%; */
    top: -410px;
    transform: rotate(5deg);
  }
  41%{
    /* left: 31%; */
    top: -400px;
  }
  44%{
    /* left: 29%; */
    top: -410px;
    transform: rotate(-5deg);

  }
  47% {    
    /* left: 30%; */
    top: -400px;
  }
  78% {
    transform: rotate(0);
  }
  100%{
    top: 110px;
  }
`;

const Image = styled.img`
  position: absolute;
  top: -800px;
  left: calc(50% - 149px);
  /* transform: translate(-50%, 0); */
  animation: ${imgAnimation} 4s ease-in-out forwards;
  border-radius: 15px;
  z-index: 3;
`;

// const StyledWrapper = styled.div`
//   width: 100px;
//   height: 100px;
//   background: #00bfb2;
//   ${(props) =>
//     props.active &&
//     `
//    animation: ${imgAnimation} 2s 1s infinite linear alternate;
//   `}
// `;

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
  }, []);

  const handleSave = () => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = finalImage;
    link.download = "스티커 사진";
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <ContainerDiv>
          <LogoContainer>
            <Logo style={{ marginBottom: 30 }} />
          </LogoContainer>
            <Image src={finalImage} />;
          <ButtonsContainer>
            <IconDiv>
              <Icon />
            </IconDiv>
            <Button text="이미지 저장하기" onClick={handleSave} />
          </ButtonsContainer>
        </ContainerDiv>
      )}
    </>
  );
}

export default ResultPage;

const FinalImage = styled.img`
  object-fit: cover;
`;
