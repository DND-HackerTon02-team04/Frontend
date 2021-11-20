import React from 'react';

import Modal from './base/Modal';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-bottom: 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  width: 60px;
  height: 30px;
  cursor: pointer;

  &:hover {
    filter: brightness(100%);
    transform: scale(1.05);
    transition: 0.1s ease-in-out transform;
  }
  &:focus {
    filter: brightness(90%);
  }
 
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  word-break: keep-all;
  text-align: center;
  line-height: 40px;
  margin: 10px;
`;

const Description = styled.div`
  font-weight: 500;
  word-break: keep-all;
  text-align: center;
  line-height: 40px;
  margin: 0px 10px 10px 10px;
`;


const AlertModal = ({ title, description, visible, handleClose, ...props }) => {
  
  return (
    <Modal visible={visible} {...props}>
      <Title block bold size='lg'>{title}</Title>
      <Description block>{description}</Description>
      <StyledButton 
        width='60px'
        height='40px'
        borderWidth='0'
        onClick={handleClose}>
          확인
      </StyledButton>
    </Modal>
  );
};

export default AlertModal;
