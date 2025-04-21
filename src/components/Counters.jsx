import React, { useReducer } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      }
    default:
      return state;
  }
};

const Counters = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <h1 className="text-center">Counters</h1>
      <Row>
        <span className="text-center fs-5 fw-semibold">
          Total Count: {state.count}
        </span>
        <Col className="d-flex align-items-center justify-content-center gap-3 my-3">
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => dispatch({ type: "INC" })}
          >
            INC
          </Button>
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={() => dispatch({ type: "DEC" })}
          >
            DEC
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Counters;
