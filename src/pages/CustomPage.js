import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Button, ArrowButton } from "../components/Buttons";
import dummyData from "../dummyData.json";
import { useNavigate } from "react-router";
import { useImages } from "../contexts/ImagesProvider";
import Logo from "../components/Logo";
import html2canvas from "html2canvas";
import ImageLists from "../components/ImageLists";

const ContainerDiv = styled.div`
  padding: 90px 36px 31px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const Text = styled.p`
  color: #676767;
  font-size: 16px;
  margin-bottom: 22px;
  font-weight: 600;
`;

const PhotosDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 15px 27px 15px;
  background: ${(props) => props.color || "linear-gradient(#68b1e6, #b8e6cf)"};
  box-shadow: rgb(255, 251, 198) 0px 10px 55px,
    rgb(255, 251, 198) 0px -12px 30px, rgb(255, 251, 198) 0px 4px 6px,
    rgb(255, 251, 198) 0px 12px 13px, rgb(255, 251, 198) 0px -3px 5px;
`;

const ArrowLeftDiv = styled.div`
  position: absolute;
  left: 6px;
  bottom: 372px;
`;

const ArrowRightDiv = styled.div`
  position: absolute;
  bottom: 372px;
  right: 6px;
`;

// props : grid, photosUrlArray
function CustomPage() {

  const {imagesState:{images, color}, setColor} = useImages();
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    html2canvas(document.querySelector('#capture'),{
      allowTaint: true,
      useCORS: true
    }).then((canvas) => {
      onSaveAs(canvas.toDataURL('image/png'), 'sticker-photo.png');
    })
    // navigate("/result");
  };

  const onSaveAs = (uri, filename) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  }

  const handleArrowClick = (arrow) => {
    const addNumber = arrow === "right" ? 1 : -1;
    if (colorIndex + addNumber >= dummyData.colors.length) {
      setColorIndex(0);
    } else if (colorIndex + addNumber < 0) {
      setColorIndex(dummyData.colors.length - 1);
    } else {
      setColorIndex(colorIndex + addNumber);
    }
    setColor(dummyData.colors[colorIndex]);
  };

  return (
    <div
      style={{
        width: 370,
        height: 801,
        background:
          "linear-gradient(0deg, #67B1E6 -115.92%, #FFFFFF 48.14%, #67B1E6 186.7%)",
        margin: 0,
        padding: 0,
      }}
    >
      <ContainerDiv >
        <Text>배경을 선택해주세요.</Text>
        <ArrowLeftDiv>
          <ArrowButton
            onClick={() => handleArrowClick("left")}
            arrow="left"
          />
        </ArrowLeftDiv>
        <PhotosDiv color={color} id='capture'>
          <Logo small style={{ marginBottom: 26 }} />
          <ImageLists />
        </PhotosDiv>
        <ArrowRightDiv>
          <ArrowButton
            onClick={() => handleArrowClick("right")}
            arrow="right"
          />
        </ArrowRightDiv>
        <Button text="사진 출력하기" onClick={handleClick} />
      </ContainerDiv>
    </div>
  );
}

export default CustomPage;
