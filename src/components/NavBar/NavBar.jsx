import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../../assets/img/logo.png";
import CartWidget from "./CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-warning" variant="dark">
      <Container>
        <Link className="btn" to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Fulbito Shop Logo"
          />{" "}
          Fulbito Shop
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={({isActive}) => isActive? "btn btn-outline-dark" : "btn"}>Inicio</NavLink>
            <NavLink to="/category/pelotas" className={({isActive}) => isActive? "btn btn-outline-dark" : "btn"}>Pelotas</NavLink>
            <NavLink to="/category/remeras" className={({isActive}) => isActive? "btn btn-outline-dark" : "btn"}>Remeras</NavLink>
            <NavLink to="/category/botines" className={({isActive}) => isActive? "btn btn-outline-dark" : "btn"}>Botines</NavLink>
            {/* <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              data-bs-theme="dark"
            >
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Todas</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Link className="btn">
            <CartWidget />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
