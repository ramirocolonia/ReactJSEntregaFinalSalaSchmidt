import { memo } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardFooter from "react-bootstrap/CardFooter";
import { Link } from "react-router-dom";

const Item = memo(({ item }) => {
  return (
    <Card className="card w-25">
      <Card.Img className="card-img-top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>
          <h3>{item.title}</h3>
        </Card.Title>
          <h4>$ {item.price}</h4>
        <CardFooter>
          <Link to={`/item/${item.id}`}>
            <Button className="w-100" variant="warning">
              detalle
            </Button>
          </Link>
        </CardFooter>
      </Card.Body>
    </Card>
  );
});

export default Item;