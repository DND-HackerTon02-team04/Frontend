import React from "react";
import styled from "styled-components";
import { Button, ArrowButton } from "./Buttons";
import { ReactComponent as Logo } from "../assets/customLogo.svg";

const PhotosDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 43px 15px 27px 15px;
  background: ${(props) => props.color || "linear-gradient(#68b1e6, #b8e6cf)"};
  box-shadow: rgb(255, 251, 198) 0px 10px 55px,
    rgb(255, 251, 198) 0px -12px 30px, rgb(255, 251, 198) 0px 4px 6px,
    rgb(255, 251, 198) 0px 12px 13px, rgb(255, 251, 198) 0px -3px 5px;
`;

const PhotoImage = styled.img`
  border-radius: 20px;
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
`;

const ArrowDiv = styled.div`
  padding: 0 6px;
  width: 370px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 372px;
`;

function Photos({ color, custom, handleClick, handleArrowClick, images }) {
  return (
    <>
      <PhotosDiv color={color}>
        <Logo style={{ marginBottom: 26 }} />
        <ArrowDiv>
          {custom ? (
            <>
              <ArrowButton
                onClick={() => handleArrowClick("left")}
                arrow="left"
              />
              <ArrowButton
                onClick={() => handleArrowClick("right")}
                arrow="right"
              />
            </>
          ) : null}
        </ArrowDiv>
        {images.map((photo) => (
          <PhotoImage src={photo} />
        ))}
      </PhotosDiv>
    </>
  );
}

export default Photos;
