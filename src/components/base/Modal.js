import React, { useMemo, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import reactDom from 'react-dom';

const BackgroundScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  visibility: hidden; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(.6);
  padding: 8px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  
  transition: .1s ease-in;

  &.active {
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
    transition: .2s cubic-bezier(.5,1.75,.5,1.75);
  }
`;


const Modal = ({ 
  children, 
  width, 
  height,
  visible = false,
  onClose,
  ...props
}) => {

  const modalWidth = 300;

  const containerStyle = useMemo(() => ({
    width: modalWidth,
    height
  }), [modalWidth, height]); 
  const el = useMemo(() => document.createElement('div'), []);

  const stopPropagation = useCallback(e => {
    e.stopPropagation();
  }, []);
    
  useEffect(() => {
    document.body.appendChild(el);
  
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);
  
  return reactDom.createPortal(
    <BackgroundScreen 
      visible={visible}
      onClick={onClose}>
      <ModalContainer
        className={visible ? 'active' : ''} 
        style={{ 
          ...props.style,
          ...containerStyle
        }}
        onClick={stopPropagation}
        {...props}
      >
        {children}
      </ModalContainer>
    </BackgroundScreen>,
    el);
};

export default Modal;
