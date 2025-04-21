import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/thunks/productThunks";

const Products = () => {
  // const [products, setProducts] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("https://dummyjson.com/products");
  //     setProducts(response.data.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img
                variant="top"
                src={product.thumbnail}
                width={50}
                height={220}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
