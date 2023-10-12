import "./NavBar.css";
import Logo from "../../assets/img/logo.png";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="menu">
      <div className="menuItems">
        <img src={Logo} alt="logo empresa" className="imgLogo" />
        <h2>Fulbito Shop</h2>
        <button>Inicio</button>
        <button>Pelotas</button>
        <button>Botines</button>
        <button>Remeras</button>
      </div>
      <CartWidget/>
    </nav>
  );
};

export default NavBar;
