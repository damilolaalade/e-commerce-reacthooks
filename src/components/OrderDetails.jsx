import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fs } from "../pages/firebase";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h2`
  margin: 20px;
  text-align:center;
`;

const OrderDetails = () => {
  const params = useParams();

  const { orderId } = params;

  //retrieving all orders from firebase
  const [orders, setOrders] = useState([]);
  const getAllOrders = async () => {
    const orders = await fs.collection("Orders").get();
    const ordersArray = [];
    for (var snap of orders.docs) {
      var data = snap.data();
      data.ID = snap.id;
      ordersArray.push({
        ...data,
      });
      if (ordersArray.length === orders.docs.length) {
        setOrders(ordersArray);
      }
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getAllOrders();
  }, []);

  const selectedItem = orders.filter((order) => order.ID === orderId);

  console.log(selectedItem);

  const ItemsArray = selectedItem[0]?.OrderItems;

  console.log(ItemsArray);

  return (
    <Container>
      <Title> Order Details </Title>
      <p style={{ textAlign: "center" }}>
        Click <Link to="/account" style = {{textDecoration:"none", color:"green"}}> here </Link>to Go back
      </p>
      <Wrapper>
        {ItemsArray &&
          ItemsArray.map((orderItemData) => {
            return <OrderItem individualProduct={orderItemData} />;
          })}
      </Wrapper>
      {ItemsArray?.length < 1 && <LoadingSpinner />}
    </Container>
  );
};

export default OrderDetails;
