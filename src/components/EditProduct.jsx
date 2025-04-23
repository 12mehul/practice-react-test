import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { updateProduct } from "../redux/slice/addProductSlice";
import {
  fetchSingleProductThunk,
  updateProductThunk,
} from "../redux/thunks/productThunks";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product } = useSelector((state) => state.addProduct);
  const { singleProduct } = useSelector((state) => state.productsSlice);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleProductThunk(id));
    }
  }, [id]);

  // Populate form fields from singleProduct once fetched
  useEffect(() => {
    if (singleProduct) {
      dispatch(updateProduct(singleProduct));
    }
  }, [singleProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProduct({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateProductThunk(id, product));
      setTimeout(() => navigate("/products-slice"), 1000);
    }
  };

  return (
    <Container>
      <h1 className="text-center my-4">Edit Product</h1>
      <Row className="g-4">
        <Col>
          <Card>
            <Form
              className="d-flex flex-column align-items-center m-4"
              onSubmit={handleSubmit}
            >
              <Form.Group className="w-100 mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter product name..."
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="w-100">
                <Form.Control
                  type="text"
                  placeholder="Enter product category..."
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button className="w-50 my-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProduct;
