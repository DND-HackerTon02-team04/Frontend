import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const MainPage = () => {


  return (
    <div>
    <Logo />
    <Link to="/photos/new">사진 찍기!</Link>
    </div>
  )
}

export default MainPage;