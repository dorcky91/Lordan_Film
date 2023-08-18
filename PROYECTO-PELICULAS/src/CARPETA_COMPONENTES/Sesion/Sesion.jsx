import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Sesion/Sesion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Sesion = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        scrollable
        className="text-black moddal-show">
        <Modal.Body className="small  seccion-sesion position-relative">
          {/* <Modal.Header ></Modal.Header> */}
          <Button onClick={props.onHide} id="btn-cerrar">
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          <div className="container">
            <div className="row mt-3">
              <div className="col-lg-5 text-white">
                <h3 className="fw-medium mb-5">Iniciar Sesión</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <h6 className="text-uppercase">Iniciar Sesión</h6> */}
                    {/* <p>¿Aún no tienes una cuenta? Crear cuenta</p> */}
                    <Form.Label>Correo Electrónico :</Form.Label>
                    <Form.Control
                      className=" mb-5 border-0 input-correo"
                      type="email"
                      placeholder="lordan@hotmail.com"
                    />
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>Contraseña :</Form.Label>
                    <Form.Control
                      className=" border-0 input-contrasena"
                      type="password"
                      placeholder="Contraseña"
                    />
                  </Form.Group>
                  <Button
                    className="w-100 iniciar-sesion"
                    variant="primary"
                    type="submit">
                    Iniciar Sesión
                  </Button>
                </Form>
                <hr className="my-4" />
                <div className="text-center">
                  <p className="mb-3 small">
                    Iniciar Sesión Con Tu Red Social :
                  </p>
                  <div className="mb-4">
                    <Link
                      target="_blank"
                      className="text-decoration-none text-white"
                      to={"https://www.facebook.com"}>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="fs-4 me-3 red-social"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      className="text-decoration-none text-white"
                      to={"https://www.instagram.com"}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="fs-4 me-3 red-social"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      className="text-decoration-none text-white"
                      to={"https://accounts.google.com"}>
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="fs-4 red-social"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ;
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Sesion;
