import React from 'react';
import styled from 'styled-components';
import { CONSTANTS } from '../../constants';
import placeholder from '../../assets/plus.svg';

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
          src={src ? src : placeholder} 
          {...props}
      />
        : <Plus src={placeholder} alt='plus' />
      }
    </>
  );
};

export default Image;

const ImageStyled = styled.img`
  display: block;
  /* ${({ width, height }) => ({ 
    width,
    height 
  })}; */
  border-radius: ${CONSTANTS.IMAGE.RADIUS}px;
  width: 100%;
  height: 100%;
  `;

const Plus = styled.img`
  display: block;
  cursor: pointer;
  width: 66.52px;
  height: 66.52px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
