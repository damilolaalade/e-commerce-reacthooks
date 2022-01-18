import { keyframes } from "styled-components";
import styled from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  align-items: center;
  text-align: center;
  margin: auto;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid #4e6539;
    border-color: #4e6539 transparent;
    animation: ${rotate} 2s linear infinite;
  }
`;

// <div className={`${classes.spinner} text-center mx-auto`}></div>;
const LoadingSpinner = () => {
  return <Container></Container>;
};

export default LoadingSpinner;
