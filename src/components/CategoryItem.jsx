import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 90vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Caption = styled.h2`
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  color: gray;
  cursor: pointer;
`;

const CategoryItem = ({ peritem }) => {
  return (
    <Container>
      <Image src={peritem.img} />
      <Info>
        <Caption>{peritem.title}</Caption>
        <Link to={peritem.catlink}>
          <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
