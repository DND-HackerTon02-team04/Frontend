
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  animation : ${spin} 0.5s linear infinite;
  border: 4px solid transparent;
`;

const Spinner = ({ size = 24, color = '#919EAB', loading = true, ...props }) => {
  const sizeStyle = {
    width : size,
    height : size,
    borderTopColor : color
  };

  return loading ? <><Icon style={{ ...props.style, ...sizeStyle }} /></> : null;
};

export default Spinner;