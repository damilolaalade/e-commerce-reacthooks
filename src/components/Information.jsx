import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: #4e6539;
  color: white;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Information = () => {
  return <Container>Super Deals! Free Delivery on All Orders !</Container>;
};

export default Information;
