import "../Navbar/Navbar.css";
import logo from "../Navbar/lordanLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
// import "../CARPETA_COMPONENTES/Hero/Hero";
import { Link } from "react-router-dom";

function Menu() {
  return (
    // <header>
    <Navbar collapseOnSelect expand="md" className="sticky-top py-3">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div id="logo" className="order-md-1 flex-md-grow-1">
          <Link to={"http://localhost:5173/"}>
            <img height="40" src={logo} alt="" />
          </Link>
        </div>
        <div className="order-md-2">
          <div id="search">
            <input
              type="text"
              id="inpBusqueda"
              placeholder="Buscar Películas..."
            />
            <div className="icono">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <FontAwesomeIcon className="ms-3 user" icon={faUser} />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav" className="order-md-0">
          <Nav>
            <Link to={"/"} className="text-decoration-none">
              <p className="text-uppercase navlink me-3">Inicio</p>
            </Link>
            <Link to={"/Favoritas"} className="text-decoration-none">
              <p className="text-uppercase navlink mb-0">Mis Favoritas</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </header>
  );
}

export default Menu;
