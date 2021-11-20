import React from 'react';
import styled from 'styled-components';
import { CONSTANTS } from '../../constants';
import {ReactComponent as Plus} from '../../assets/plus.svg';

const Image = ({ 
  src,
  width = CONSTANTS.IMAGE.WIDTH,
  height = CONSTANTS.IMAGE.HEIGHT,
  ...props 
}) => {

  return (
    <>
      {src 
        ? <ImageStyled
          showPlaceholder={!src}
          src={src} 
          {...props}
      />
        : <StyledPlus />
      }
    </>
  );
};

export default Image;

const ImageStyled = styled.img`
  display: block;
  border-radius: ${CONSTANTS.IMAGE.RADIUS}px;
  width: 100%;
  height: 100%;
  `;

const StyledPlus = styled(Plus)`
  display: block;
  cursor: pointer;
  width: 45px;
  height: 45px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);

  & > svg path {
    stroke : #BFDFF5;
  }
`;
