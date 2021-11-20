import React from "react";
import styled from "styled-components";
import { ReactComponent as Loading } from "../assets/loading.svg";
import { ReactComponent as LoadingMessage } from "../assets/loadingMessage.svg";

const LoadingContainer = styled.div`
  z-index: 100;
  display: absolut;
  top: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
`;

const LoadingDiv = styled.div`
  position: absolute;
  align-self: center;
  left: 45px;
`;

function LoadingPage({ loading }) {
  return (
    <LoadingContainer show={loading}>
      <Loading />
      <LoadingDiv>
        <LoadingMessage />
      </LoadingDiv>
    </LoadingContainer>
  );
}

export default LoadingPage;
