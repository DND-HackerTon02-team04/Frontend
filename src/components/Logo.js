import React from 'react';
import logoSVG from '../assets/logo.svg';
import mainLogoSVG from '../assets/logoMain.svg';
const Logo = ({main, ...props}) => {


  return (
      <img src={main ? mainLogoSVG : logoSVG} alt='logo' {...props} />
  )
}

export default Logo;
