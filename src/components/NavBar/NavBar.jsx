import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../../assets/img/logo.png";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-warning" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Fulbito Shop Logo"
          />{" "}
          Fulbito Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown" data-bs-theme="dark">
              <NavDropdown.Item href="#action/3.1">Pelotas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Botines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Remeras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Todas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav className="menu">
    //   <div className="menuItems">
    //     <img src={Logo} alt="logo empresa" className="imgLogo" />
    //     <h2>Fulbito Shop</h2>
    //     <button>Inicio</button>
    //     <button>Pelotas</button>
    //     <button>Botines</button>
    //     <button>Remeras</button>
    //   </div>
    //   <CartWidget/>
    // </nav>
  );
};

export default NavBar;
