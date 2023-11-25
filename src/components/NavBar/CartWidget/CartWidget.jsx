import Cart from "../../../assets/icons/carrito.png"
import { useCartContext } from "../../../contexts/CartContext";
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
