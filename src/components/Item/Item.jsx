import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <h5>{item.description}</h5>
          <p>{item.price}</p>
        </Card.Text>
        <Button variant="waning">detalle</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
