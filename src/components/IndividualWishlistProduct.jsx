import styled from "styled-components";
import { DeleteForever } from "@mui/icons-material";
import { mobile } from "../responsive";
import { fs } from "../pages/firebase";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductDesc = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 10px;
`;

const IndividualWishlistProduct = ({ wishlistProduct }) => {
  let localId = localStorage.getItem("userId");

  // console.log(localId);

  const deleteProduct = (ProdID) => {
    fs.collection(`WishList${localId}`).doc(ProdID).delete();
  };

  return (
    <Container>
      <Wrapper>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={wishlistProduct.url} alt="productImage" />
                <Details>
                  <ProductName>
                    <b>Product:</b> {wishlistProduct.title}
                  </ProductName>
                  <ProductDesc>
                    <b>Desc:</b> {wishlistProduct.desc}
                  </ProductDesc>
                  <ProductColor color={wishlistProduct.color} />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <DeleteForever
                    onClick={() => {
                      deleteProduct(wishlistProduct.ID);
                    }}
                  />
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default IndividualWishlistProduct;
