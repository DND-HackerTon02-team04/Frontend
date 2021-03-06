import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { CONSTANTS } from '../../constants';
import Image from '../base/Image';


const FILE_TYPE = 'image/*';

const ImageUploader = ({ 
  accept = FILE_TYPE,
  droppable, 
  src,
  alt,
  style, 
  width,
  height,
  type,
  onChange,
  ...props }) => {
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef(null);

  const handleFileSelect = useCallback(() => {
    inputRef.current?.click();
  }, [inputRef]);

  const handleFileChange = useCallback(event => {
    setDragging(false);
    onChange && onChange(event);
  }, [onChange]);
 
  const handleDragOver = useCallback(event => {
    if (!droppable) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  }, [droppable]);
  
  const handleDragLeave = useCallback(event => {
    handleDragOver(event);
    setDragging(false);
  }, [handleDragOver]); 

  return (
    <InputContainer 
      style={{ 
        width,
        height,
        ...style 
      }}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleFileChange}
      dragging={dragging}
      type={type}
      hasImage={!!src}
      onClick={handleFileSelect}
      {...props}
    >
      <Input
        type='file'
        ref={inputRef}
        accept={accept}
        onChange={handleFileChange}
      />
      <ImagePreview
        src={src}
        alt={alt}
        type={type}
        style={{ 
          mixBlendMode: 'multiply',
          ...style 
        }}
      />
    </InputContainer>
  );
};

export default ImageUploader;

const InputContainer = styled.div`
display: inline-block;
border-radius: ${CONSTANTS.IMAGE.RADIUS}px;
position: relative;
cursor: pointer;
background-color: #E2F4FA;
&:hover {
  opacity: .8;
  ::after{
  display: ${({ hasImage }) => hasImage ? 'block' : 'none'};
  cursor: pointer;
    content: '수정';
    position: absolute;
    color: #efefef;
    font-size: 1.5rem;
    font-weight: 800;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
  }
}
`;

const Input = styled.input({
  display: 'none'
});

const ImagePreview = styled(Image)`
  width: 100%;
  height: 100%;
`;