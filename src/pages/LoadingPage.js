import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Loading } from "../assets/loading.svg";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingContainer = styled.div`
  z-index: 100;
  display: absolut;
  top: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
`;

const textWave = keyframes`
  0% { top: 0; } 20% { top: -0.3rem; } 40% { top: 0 } 60% { top: 0 } 80% { top: 0 } 100% { top: 0 } 
`;

const Span = styled.span`
  position: relative;
  animation: ${textWave} 1s infinite;
  :nth-child(1) {
    animation-delay: 0.1s;
  }
  :nth-child(2) {
    animation-delay: 0.2s;
  }
  :nth-child(3) {
    animation-delay: 0.3s;
  }
  :nth-child(4) {
    animation-delay: 0.4s;
  }
  :nth-child(5) {
    animation-delay: 0.5s;
  }
  :nth-child(6) {
    animation-delay: 0.6s;
  }
`;

const LoadingDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 40%;
  width: 100%;
  height: 30px;
  z-index: 200;
  font-size: 16px;
  :nth-child(1) {
  }
`;

function LoadingPage({ loading }) {
  return (
    <DivContainer>
      <LoadingDiv>
        <Span>출</Span>
        <Span>력</Span>
        <Span>중</Span>
        <Span>입</Span>
        <Span>니</Span>
        <Span>다</Span>
      </LoadingDiv>
      <LoadingContainer show={loading}>
        <Loading />
      </LoadingContainer>
    </DivContainer>
  );
}

export default LoadingPage;
