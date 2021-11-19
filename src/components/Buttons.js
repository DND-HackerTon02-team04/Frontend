import React from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ButtonComponent = styled.div`
  border: none;
  border-radius: 33px;
  padding: 20px 85px;
  background-color: #e5e5e5;
  margin-top: 33px;
`;

const ButtonText = styled.p`
  color: #676767;
`;

const ButtonRight = styled.button`
  border: none;
  background-color: #fff98f;
  border-radius: 50%;
  height: 37px;
  width: 37px;
`;

const ArrowRight = styled(FaArrowRight)`
  color: #b8e6cf;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowLeft = styled(FaArrowLeft)`
  color: #b8e6cf;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Button({ text, onClick }) {
  return (
    <ButtonComponent onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonComponent>
  );
}

export function ArrowButton({ onClick, arrow }) {
  return (
    <ButtonRight onClick={onClick}>
      {arrow === "right" ? <ArrowRight /> : <ArrowLeft />}
    </ButtonRight>
  );
}
