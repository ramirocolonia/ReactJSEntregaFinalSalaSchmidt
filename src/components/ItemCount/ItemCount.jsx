import Button from "react-bootstrap/Button";
import useCounter from "../../hooks/useCounter";

const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, increment, decrement } = useCounter(initial, stock);

  const handleOnAdd = () => {
    onAdd(count);
  };

  return (
    <div className="text-center">
      <div className="btn-group">
        <Button className="mx-2" variant="outline-warning" onClick={decrement}>
          -
        </Button>
        <p className="mx-2">{count}</p>
        <Button className="mx-2" variant="outline-warning" onClick={increment}>
          +
        </Button>
      </div>
      <div>
        <Button className="mt-2" variant="warning" onClick={handleOnAdd}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;