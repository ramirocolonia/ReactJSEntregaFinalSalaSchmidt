import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Item from '../Item/Item';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <Item item={item} />
    </div>
  );
};

export default ItemDetail;
