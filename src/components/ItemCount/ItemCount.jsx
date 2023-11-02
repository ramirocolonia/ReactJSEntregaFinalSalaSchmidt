import { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import useCounter from "../../hooks/useCounter";

const ItemCount = ({stock, initial, onAdd}) => {
  const {count, increment, decrement} = useCounter(initial, stock)
  return (
    <Form>
      <Row>
        <Col>
          <Button variant="outline-warning" onClick={decrement}>-</Button>
        </Col>
        <Col>
          <p>{count}</p>
        </Col>
        <Col>
          <Button variant="outline-warning" onClick={increment}>+</Button>
        </Col>
        <Col>
          <Button variant="warning" onClick={onAdd}>Agregar al carrito</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ItemCount;
