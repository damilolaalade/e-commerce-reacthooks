import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Information from "../components/Information";
import Footer from "../components/Footer";
import { fs } from "./firebase";
import CopyRight from "../components/CopyRight";
import styled from "styled-components";
import { Table, Tr } from "styled-table-component";
import NewsLetter from "../components/NewsLetter";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  overflow-x: auto;
  margin:10px;
`;

const MyAccount = () => {
  const uid = localStorage.getItem("userId");

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

  const selectedOrders = orders.filter((order) => order.UserId === uid);

  let counter = 1;

  return (
    <Container>
      <NavBar />
      <Information />
      <Wrapper>
        {selectedOrders.length > 0 && (
          <Table>
            <thead>
              <Tr>
                <th scope="col">S/N</th>
                <th scope="col">Order Id</th>
                <th scope="col">Order Total</th>
                <th scope="col">Total Quantity</th>
                <th scope="col">Actions</th>
              </Tr>
            </thead>
            <tbody>
              {selectedOrders.map((orderData) => {
                return (
                  <Tr active key={orderData.ID}>
                    <td>{counter++}</td>
                    <td>{orderData.ID}</td>
                    <td>{orderData.OrderPrice}</td>
                    <td>{orderData.OrderQuantity}</td>
                    <td>
                      <Link to={`/orderDetails/${orderData.ID}`}>
                        <button>View Items</button>
                      </Link>
                    </td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        )}
        {selectedOrders.length < 1 && (
          <p>
            You have never placed an Order. Click{" "}
            <Link to="/products"  style = {{textDecoration:"none", color:"green"}}> here </Link>to Order
          </p>
        )}
      </Wrapper>
      <NewsLetter />
      <Footer />
      <CopyRight />
    </Container>
  );
};

export default MyAccount;
