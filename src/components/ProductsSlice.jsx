import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  deleteProductThunk,
  fetchProductsThunk,
} from "../redux/thunks/productThunks";

const ProductsSlice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productsSlice
  );

  const handleViewClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteProductThunk(id));
    alert("Product deleted successfully");
  };

  const handleEditClick = (id) => {
    navigate(`/edit-product/${id}`);
  };

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);

  return (
    <Container>
      <h1 className="text-center">Product Lists</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="my-3 g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100">
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
              <Card.Footer className="d-flex justify-content-evenly">
                <Button
                  variant="outline-primary"
                  size="lg"
                  onClick={() => handleViewClick(product.id)}
                >
                  View
                </Button>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => handleEditClick(product.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="lg"
                  onClick={() => handleDeleteClick(product.id)}
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsSlice;
