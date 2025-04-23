import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProductThunk } from "../redux/thunks/productThunks";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleProduct } = useSelector((state) => state.productsSlice);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProductThunk(id));
    }
  }, [id]);

  return (
    <Container>
      <h1 className="text-center my-4">View Product</h1>
      <Row
        xs={1}
        md={3}
        className="d-flex align-items-center justify-content-center"
      >
        {singleProduct && (
          <Col key={singleProduct.id}>
            <Card>
              <Card.Img
                variant="top"
                src={singleProduct.thumbnail}
                width={50}
                height={220}
              />
              <Card.Body>
                <Card.Title>{singleProduct.title}</Card.Title>
                <Card.Text>{singleProduct.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SingleProduct;
