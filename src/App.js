import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsLists from "./pages/ProductsLists";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import SelectedCategory from "./pages/SelectedCategory";
import Wishlist from "./pages/Wishlist";
import MyAccount from "./pages/MyAccount";
import OrderDetails from "./components/OrderDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<ProductsLists />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/orderDetails/:orderId" element={<OrderDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/category/:category" element={<SelectedCategory />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
