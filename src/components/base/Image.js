import React from 'react';
import styled from 'styled-components';

const DEFAULT_PLACEHOLDER = 'https://via.placeholder.com/500';

const ImageStyled = styled.img`
  display: 'block';
  cursor : pointer;
  ${({ width, height }) => ({ 
    width,
    height 
  })};
  ${({ type }) => type}
`;

const Image = ({ 
  src,
  placeholder = DEFAULT_PLACEHOLDER, 
  width = 100,
  height = 100,
  ...props 
}) => {

  return (
    <ImageStyled 
      src={src ? src : placeholder} 
      width={width} 
      height={height} 
      {...props}
    />
  );
};

export default Image;
