import Cart from "../../../assets/icons/carrito.png"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="carrito">
      <img src={Cart} alt="carrito" className="carrito-icono" />
      <p>5</p>
    </div>
  );
};

export default CartWidget;
