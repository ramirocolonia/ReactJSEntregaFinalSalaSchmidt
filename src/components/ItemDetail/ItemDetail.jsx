import { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../contexts/CartContext";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const [goCart, setGoCart] = useState(false)
  const { addToCart } = useCartContext()
  
  const onAdd = (cant) => {
    addToCart({ ...item, cant })
    setGoCart(true)
  }

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
            <Link className="mx-2 btn btn-warning" to='/'>
              Seguir Comprando
            </Link>
            <Link className="mx-2 btn btn-warning" to='/cart'>
              Ir al Carrito
            </Link>
          </div>
        ) : (
          <ItemCount onAdd={onAdd} initial={1} stock={item.stock} />
        )}
      </div>
    </div>
  );
};