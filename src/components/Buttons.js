import React from "react";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ButtonComponent = styled.div`
  cursor: pointer;
  border: none;
  border-radius: 33px;
  padding: 20px 85px;
  background-color: #67b1e6;
  color: #fff;
  font-weight: 400;
  margin-top: 33px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
`;

const ButtonRight = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff98f;
  border-radius: 50%;
  height: 37px;
  width: 37px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const ArrowRight = styled(FaArrowRight)`
  cursor: pointer;
  color: #b8e6cf;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #9eedc4;
  }
`;

const ArrowLeft = styled(FaArrowLeft)`
  color: #b8e6cf;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #9eedc4;
  }
`;

export function Button({ text, onClick }) {
  return <ButtonComponent onClick={onClick}>{text}</ButtonComponent>;
}

export function ArrowButton({ onClick, arrow }) {
  return (
    <ButtonRight onClick={onClick}>
      {arrow === "right" ? <ArrowRight /> : <ArrowLeft />}
    </ButtonRight>
  );
}
