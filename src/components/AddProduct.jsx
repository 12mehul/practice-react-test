import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearProduct, updateProduct } from "../redux/slice/addProductSlice";
import { addProductThunk } from "../redux/thunks/productThunks";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.addProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProduct({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.title === "" || product.category === "") {
      alert("Please fill all the fields");
      return;
    }
    dispatch(addProductThunk(product));
    dispatch(clearProduct());
  };

  return (
    <Container>
      <h1 className="text-center my-4">Add Product</h1>
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

export default AddProduct;
