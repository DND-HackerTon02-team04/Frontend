import React from 'react';
import styled from 'styled-components';


const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  width: 100%;

  &:hover {
    opacity: .7;
  }
`;

const LayoutSelectorItem = ({ children, onClick, ...props }) => {
  return <ButtonStyled onClick={onClick} {...props}>
      {children}
  </ButtonStyled>;
};

export default LayoutSelectorItem;
