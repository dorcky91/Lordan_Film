import "../Navbar/Navbar.css";
import { useState } from "react";
import logo from "../Navbar/lordanLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import User from "../Navbar/user.png";
import Navbar from "react-bootstrap/Navbar";
import Sesion from "../Sesion/Sesion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
// import "../CARPETA_COMPONENTES/Hero/Hero";
import { Link, NavLink, useLocation } from "react-router-dom";

function Menu() {
  const [modalShow, setModalShow] = useState({
    show: false,
  });
  const pagina = useLocation().pathname;
  return (
    <>
      <Navbar collapseOnSelect expand="md" className="sticky-top py-3">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div id="logo" className="order-md-1 flex-md-grow-1">
            <Link to={"/"}>
              <img className="logo-header" height="40" src={logo} alt="" />
            </Link>
          </div>
          <div className="order-md-2">
            {pagina != "/" ? (
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
            ) : (
              ""
            )}
            <Link
              className=" text-decoration-none text-white"
              onClick={() => setModalShow({ show: true })}>
              <img className="perfil" src={User} alt="" />
              <span className=" small ms-md-1 d-md-inline d-none">
                Iniciar Sesión
              </span>
              {/* <FontAwesomeIcon className="ms-3 user" icon={faUser} /> */}
            </Link>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav" className="order-md-0">
            <Nav>
              <NavLink to={"/"} className="text-decoration-none me-3">
                {/* // className={({ navlink }) => (navlink ? "active" : "")}> */}
                <p className="text-uppercase mb-0 margin-movil">Inicio</p>
              </NavLink>
              <NavLink to={"/Favoritas"} className="text-decoration-none">
                <p className="text-uppercase mb-0 margin-movil">
                  Mis Favoritas
                </p>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sesion
        show={modalShow.show}
        onHide={() => setModalShow({ show: false })}
      />
    </>
  );
}

export default Menu;
