import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Todo from "./components/Todo";
import Products from "./components/Products";
import Navbars from "./components/Navbars";
import Counters from "./components/Counters";
import ProductsSlice from "./components/ProductsSlice";
import AddProduct from "./components/AddProduct";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Navbars />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/counters" element={<Counters />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products-slice" element={<ProductsSlice />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
