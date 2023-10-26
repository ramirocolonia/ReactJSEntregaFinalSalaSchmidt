import { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const ItemCount = ({stock, initial, onAdd}) => {
  const [cant, setCant] = useState(parseInt(initial))

  const increment = () => {
    if (stock > cant){
        setCant(cant +1)
    }
  }

  const decrement = () =>{
    if (cant > 1){
        setCant(cant -1)
    }
  }

  return (
    <Form>
      <Row>
        <Col>
          <Button variant="outline-warning" onClick={decrement}>-</Button>
        </Col>
        <Col>
          <p>{cant}</p>
        </Col>
        <Col>
          <Button variant="outline-warning" onClick={increment}>+</Button>
        </Col>
        <Col>
          <Button variant="warning" onClick={onAdd}>Agregar</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ItemCount;
