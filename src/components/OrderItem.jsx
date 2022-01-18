import styled from "styled-components";


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbeff5;
  position: relative;
`;

const Image = styled.img`
  height: 85%;
  margin-bottom: 45px;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
`;

const Title = styled.h5``;
const Description = styled.p`
  font-size: 12px;
`;
const Price = styled.p`
  color: grey;
  font-size: 16px;
`;

const OrderItem = ({ individualProduct }) => {
  return (
    <Container>
      <Image src={individualProduct.url} />
      <Wrapper>
        <Title>{individualProduct.title}</Title>
              <Description>{individualProduct.desc}</Description>
              <Price> Quantity: {individualProduct.quantity}</Price>
        <Price>$ {individualProduct.price}</Price>
          </Wrapper>
        
    </Container>
  );
};

export default OrderItem;
