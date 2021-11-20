import React from "react";
import styled from "styled-components";

const LayoutSelectorContainerStyled = styled.div`
  /* height: 116.43px;
  width: 108.53px; */
  padding: 13.93px 12.46px;
  border-radius: 20px;
  background-color: #b9e7d0;
  position: absolute;
  top: auto;
  z-index: 500;
  animation: show 0.3s forwards;
  box-shadow: 0px 1.31556px 1.31556px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @keyframes show {
    from {
      opacity: 0;
      transform: scaleY(0) translateY(-50%);
    }
    to {
      opacity: 1;
      transform: scaleY(1) translateY(0);
    }
  }
`;

const LayoutSelectorContainer = ({ children, ...props }) => {
  const MenuItems = React.Children.toArray(children).filter((element) =>
    React.isValidElement(element)
  );

  return (
    <div>
      <LayoutSelectorContainerStyled column {...props}>
        {MenuItems}
      </LayoutSelectorContainerStyled>
    </div>
  );
};

export default LayoutSelectorContainer;
