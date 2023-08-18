import { useState } from "react";
import "../Footer/Footer.css";
import logo from "../Navbar/lordanLogo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/esm/Container";
import Aviso from "../Aviso/Aviso";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [modalShow, setModalShow] = useState({
    show: false,
    tipo: null,
  });

  return (
    <>
      <Container className="py-5 footer">
        <Row className="gy-3  pt-3">
          <Col lg={2}>
            <div className="text-center">
              <Link to={"/"}>
                <img height="45" src={logo} alt="" />
              </Link>
            </div>
          </Col>
          <Col lg={10} className="text-md-start text-center ">
            <Link
              className="text-decoration-none text-light"
              onClick={() =>
                setModalShow({ show: true, tipo: "Avisos Legales" })
              }>
              <small className="me-1">
                <span>Avisos legales</span>
              </small>
            </Link>
            <Link
              className="text-decoration-none text-light"
              onClick={() =>
                setModalShow({ show: true, tipo: "Términos y condiciones" })
              }>
              <small className="me-1">
                <span>Términos y condiciones</span>
              </small>
            </Link>
            <Link
              className="text-decoration-none text-light"
              onClick={() =>
                setModalShow({ show: true, tipo: "Política y privacidad" })
              }>
              <small className="me-1">
                <span>Política y privacidad</span>
              </small>
            </Link>
            <Link
              className="text-decoration-none text-light"
              onClick={() =>
                setModalShow({ show: true, tipo: "Políticas de cookies" })
              }>
              <small className="me-1 border=warning">
                <span>Políticas de cookies</span>
              </small>
            </Link>
            <Link
              className="text-decoration-none text-light"
              onClick={() =>
                setModalShow({ show: true, tipo: "Condiciones de uso" })
              }>
              <small className="me-1">
                <span>Condiciones de uso</span>
              </small>
            </Link>
            <Link
              className="text-decoration-none text-light"
              onClick={() =>
                setModalShow({ show: true, tipo: "Preguntas frecuentes" })
              }>
              <small className="me-1">
                <span>Preguntas frecuentes</span>
              </small>
            </Link>
            <Link
              className="text-decoration-none text-light"
              onClick={() =>
                setModalShow({ show: true, tipo: "Centro de ayuda" })
              }>
              <small className="me-1">
                <span className="border-left">Centro de ayuda</span>
              </small>
            </Link>
          </Col>
          <Col className="text-center redes-sociales">
            <div className="contenedor-redes me-2">
              <Link
                className="d-flex align-item-center justify-content-center"
                target="_blank"
                to={
                  "https://www.facebook.com/orlando.apollon.7?mibextid=LQQJ4d"
                }>
                <FontAwesomeIcon icon={faFacebook} className="fs-4" />
              </Link>
            </div>

            <div className="contenedor-redes me-2">
              <Link
                className="d-flex align-item-center justify-content-center"
                target="_blank"
                to={"//wa.me/+522381733282"}>
                <FontAwesomeIcon icon={faWhatsapp} className="fs-4" />
              </Link>
            </div>
            <div className="contenedor-redes me-2">
              <Link
                className="d-flex align-item-center justify-content-center"
                target="_blank"
                to={"https://instagram.com/dorckyjjda?igshid=OGQ5ZDc2ODk2ZA=="}>
                <FontAwesomeIcon icon={faInstagram} className="fs-4" />
              </Link>
            </div>
            <div className="contenedor-redes me-2">
              <Link
                className="d-flex align-item-center justify-content-center"
                target="_blank"
                to={"https://www.linkedin.com/in/orlando-appolon-863799151"}>
                <FontAwesomeIcon icon={faLinkedin} className="fs-4" />
              </Link>
            </div>
            <div className="contenedor-redes">
              <Link
                className="d-flex align-item-center justify-content-center"
                target="_blank"
                to={"https://github.com/dorcky91"}>
                <FontAwesomeIcon icon={faGithub} className=" fs-4" />
              </Link>
            </div>
          </Col>
          <Col md={12} className="text-center">
            <small>
              <p>
                Copyright &copy; 2023 - Todos Derechos Reservados - Lordan Film
              </p>
            </small>
          </Col>
        </Row>
      </Container>
      <Aviso
        show={modalShow.show}
        tipo={modalShow.tipo}
        onHide={() => setModalShow({ show: false, tipo: null })}
      />
    </>
  );
}

export default Footer;
