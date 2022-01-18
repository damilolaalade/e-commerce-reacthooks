import React from "react";
import IndividualCartProduct from "./IndividualCartProduct";

const CartProducts = ({ cartProducts }) => {
  const FilteredProducts = cartProducts.filter((item) => {
    return item.quantity > 0;
  });

  return FilteredProducts.map((cartProduct) => (
    <IndividualCartProduct key={cartProduct.ID} cartProduct={cartProduct} />
  ));
};

export default CartProducts;
