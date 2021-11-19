import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';
import BackgroundImage from '../assets/mainBackground.gif';
import startButton from '../assets/startButton.svg';
const MainPage = () => {


  return (
    <MainPageContainer>
      <Logo main />
      <StyledLink to="/photos/new"></StyledLink>
    </MainPageContainer>
  )
}

export default MainPage;

const MainPageContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  object-fit: fill;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  & > img {
    margin-top: 85px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  width: 209.5px;
  height: 65.45px;
  border-radius: 36.01px;
  position: absolute;
  bottom: 90.55px;
  /* box-shadow: 0px 1.31556px 1.31556px rgba(0, 0, 0, 0.25); */
  background-image: url(${startButton});
  background-repeat: no-repeat;
  background-position: center;
  transform: scale(1.5);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.6);
  }
  &:active {
    transform: scale(1.7);
  }
`;