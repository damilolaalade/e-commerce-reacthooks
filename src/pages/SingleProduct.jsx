import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Information from "../components/Information";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import CopyRight from "../components/CopyRight";
import { mobile } from "../responsive";
import {  fs } from "./firebase";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h2`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  margin: 0px 5px;
  cursor: pointer;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Input = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 20px;
  background-color: white;
  border: 2px solid teal;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #afd8c2;
  }
`;

const SingleProduct = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { productId } = params;

  const [product, setProduct] = useState([]);
  const sizeRef = useRef();
  const quantityRef = useRef();

  const getProduct = async () => {
    const products = await fs.collection("Products").get();
    const productArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productArray.push({
        ...data,
      });
      if (productArray.length === products.docs.length) {
        setProduct(productArray);
      }
    }
  };

  const prod = product?.find((prd) => {
    return prd.ID === productId;
  });
  console.log(productId);

  console.log(prod);

  useEffect(() => {
    getProduct();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  //passing addTo Cart props
  const uid = localStorage.getItem("userId");
  let Product;
  const addToCart = (item) => {
    if (uid !== null) {
      Product = item;
      Product["TotalProductPrice"] = item.quantity * item.price;
      fs.collection("Cart" + uid)
        .doc(item.ID)
        .set(Product)
        .then(() => {});
    } else {
      navigate("/login");
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const selectedSize = sizeRef.current.value;
    const selectedQuantity = quantityRef.current.value;

    addToCart({
      ID: prod.ID,
      url: prod.url,
      price: prod.price,

      desc: prod.desc,
      quantity: +selectedQuantity,
      size: selectedSize,
      title: prod.title,
      color: prod.color,
    });
    navigate("/cart");
  };

  return (
    <Container>
      <NavBar />
      <Information />
      <Wrapper>
        <ImgContainer>
          <Image src={prod?.url} />
        </ImgContainer>
        <InfoContainer>
          <form onSubmit={handleAddToCart}>
            <Title>{prod?.title} </Title>
            <Description>{prod?.desc} </Description>
            <Price>${prod?.price} </Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color={prod?.color} />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize ref={sizeRef}>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Input
                  ref={quantityRef}
                  type="number"
                  defaultValue="1"
                  min="1"
                  max="10"
                />
              </AmountContainer>
              <Button type="submit">ADD TO CART</Button>
            </AddContainer>
          </form>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
      <CopyRight />
    </Container>
  );
};

export default SingleProduct;
