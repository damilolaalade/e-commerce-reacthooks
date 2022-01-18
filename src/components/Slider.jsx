import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import data from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  scroll: hidden;
  position: relative;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slides * -100}vw);
  transition: all 1s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  width: 100vw;
  height: 100vh;
`;
const ImgCont = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoCont = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 60px;
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gainsboro;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.face === "left" && "10px"};
  right: ${(props) => props.face === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleArrowClick = (face) => {
    if (face === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow face="left" onClick={() => handleArrowClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slides={slideIndex}>
        {data.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgCont>
              <Image src={item.img} />
            </ImgCont>
            <InfoCont>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Link to="/products">
                <Button>SHOP NOW</Button>
              </Link>
            </InfoCont>
          </Slide>
        ))}
      </Wrapper>
      <Arrow face="right" onClick={() => handleArrowClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
