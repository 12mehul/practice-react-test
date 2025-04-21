import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Todo from "./components/Todo";
import Products from "./components/Products";
import Navbars from "./components/Navbars";
import Counters from "./components/Counters";
import ProductsSlice from "./components/ProductsSlice";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Navbars />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/products" element={<Products />} />
            <Route path="/counters" element={<Counters />} />
            <Route path="/products-slice" element={<ProductsSlice />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
