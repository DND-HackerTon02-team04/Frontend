import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Button, ArrowButton } from "../components/Buttons";
import dummyData from "../dummyData.json";
import { useNavigate } from "react-router";
import { useImages } from "../contexts/ImagesProvider";
import { ReactComponent as Logo } from "../components/assets/customLogo.svg";
import html2canvas from "html2canvas";

const ContainerDiv = styled.div`
  padding: 60px 36px 31px 36px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
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
  padding: 43px 15px 27px 15px;
  background: ${(props) => props.color || "linear-gradient(#68b1e6, #b8e6cf)"};
`;

const PhotoImage = styled.img`
  border-radius: 20px;
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
`;

const ArrowLeftDiv = styled.div`
  position: absolute;
  left: 6px;
  bottom: 372px;
`;

const ArrowRightDiv = styled.div`
  position: absolute;
  right: 6px;
  bottom: 372px;
`;

// props : grid, photosUrlArray
function CustomPage() {
  const navigate = useNavigate();
  const photos = [
    "https://source.unsplash.com/random/200x200?mountain",
    "https://source.unsplash.com/random/200x200?mountain",
    "https://source.unsplash.com/random/200x200?mountain",
    "https://source.unsplash.com/random/200x200?mountain",
  ];

  const [color, setColor] = useState(null);
  const [images, setImages] = useImages();
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {}, []);

  const handleClick = () => {
    html2canvas(document.querySelector('#capture'),{
      allowTaint: true,
      useCORS: true
    }).then((canvas) => {
      document.body.appendChild(canvas);
      onSaveAs(canvas.toDataURL('image/png'), 'sticker-photo.png');
      console.log(canvas);
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
        background: "white",
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
          <Logo style={{ marginBottom: 26 }} />
          {images.map((photo,idx) => (
            <PhotoImage src={photo} key={idx}/>
          ))}
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
