import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../redux/thunks/productThunks";

const ProductsSlice = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productsSlice
  );

  useEffect(() => {
    dispatch(fetchProductsThunk());
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

export default ProductsSlice;
