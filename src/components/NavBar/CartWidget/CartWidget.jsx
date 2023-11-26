import { useCartContext } from "../../../contexts/CartContext";

import Cart from "../../../assets/icons/carrito.png"
import "./CartWidget.css"

const CartWidget = () => {
  const { totalProducts } = useCartContext()

  return (
    <div className="carrito">
      <img src={Cart} alt="carrito" className="carrito-icono" />
      <p>{totalProducts()}</p>
    </div>
  );
};

export default CartWidget;