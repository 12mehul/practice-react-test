import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

const Todo = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (id) => {
    const newTodoLists = todoLists.filter((todo) => todo.id !== id);
    setTodoLists(newTodoLists);
  };

  const handleEdit = (id) => {
    const editTodo = todoLists.find((todo) => todo.id === id);
    if (editTodo) {
      setTodo(editTodo.title);
      setEditId(id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      return alert("Please enter a todo");
    }
    if (editId !== null) {
      const newTodoLists = todoLists.map((i) =>
        i.id === editId ? { ...i, title: todo } : i
      );
      setTodoLists(newTodoLists);
      setEditId(null);
    } else {
      const newObj = {
        id:
          todoLists.length > 0
            ? Math.max(...todoLists.map((item) => item.id)) + 1
            : 1,
        title: todo,
      };
      setTodoLists([...todoLists, newObj]);
    }
    setTodo("");
  };

  return (
    <Container>
      <h1 className="text-center">Todo Application</h1>
      <Row className="justify-content-center">
        <Col>
          <Form
            className="d-flex flex-column align-items-center my-2"
            onSubmit={handleSubmit}
          >
            <Form.Group className="w-100">
              <Form.Control
                type="text"
                name="todo"
                value={todo}
                onChange={handleChange}
                placeholder="Enter Todo"
              />
            </Form.Group>
            <Button className="w-50 my-4" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoLists.length === 0 ? (
              <tr className="text-center">
                <td colSpan={3}>No Todo</td>
              </tr>
            ) : (
              todoLists.map((todo, index) => {
                return (
                  <tr key={index} className="text-center">
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td className="d-flex align-content-center justify-content-center gap-2">
                      <Button
                        variant="primary"
                        onClick={() => handleEdit(todo.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Todo;
