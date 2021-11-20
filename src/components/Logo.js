import React from 'react';
import styled from 'styled-components';
import logoSVG from '../assets/logo.svg';
import mainLogoSVG from '../assets/logoMain.svg';
const Logo = ({main, small, ...props}) => {


  return (
      <StyledImage src={main ? mainLogoSVG : logoSVG} small={small} alt='logo' {...props} />
  )
}

export default Logo;

const StyledImage = styled.img`
  ${({small}) => small && ({
    transform: 'scale(0.7)'
  })}
`;
