import Button from "react-bootstrap/Button";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const [goCart, setGoCart] = useState(false);
  const { addToCart, cartList } = useContext(CartContext);
  
  // aca probe mostrar el item por consola y trae obj... por eso en el on Add no me funciona...
  console.log('item Deteail ' + item)
  
  const onAdd = (cant) => {
    console.log("cantidad seleccionada: ", cant);
    addToCart({ item, cant });
    setGoCart(true);
  };

  console.log('Item DEtail ' + cartList)

  return (
    <div className="row">
      <div className="col-6 mt-5 px-5">
        <img src={item.pictureUrl} alt="product img" className="img-fluid" />
      </div>
      <div className="col-6 text-center px-5 my-auto">
        <h1>{item.title}</h1>
        <h3>$ {item.price}</h3>
        <p>{item.description}</p>
        {goCart ? (
          <div className="btn-group">
            <Button className="mx-2" variant="warning">
              Seguir Comprando
            </Button>
            <Button className="mx-2" variant="warning">
              Ir al Carrito
            </Button>
          </div>
        ) : (
          <ItemCount onAdd={onAdd} initial={1} stock={item.stock} />
        )}
      </div>
    </div>
  );
};


