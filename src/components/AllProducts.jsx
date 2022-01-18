import styled from "styled-components";
import IndividualProduct from "./IndividualProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AllProducts = ({ products, addToFavorite }) => {
  return (
    <Container>
      {products.map((individualProduct) => (
        <IndividualProduct
          key={individualProduct.ID}
          individualProduct={individualProduct}
          addToFavorite={addToFavorite}
        />
      ))}
    </Container>
  );
};

export default AllProducts;
