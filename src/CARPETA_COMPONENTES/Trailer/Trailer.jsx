import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Sesion from "../Sesion/Sesion";
import "../../CARPETA_COMPONENTES/Trailer/Trailer.css";

function Trailer(props) {
  const [modalShow, setModalShow] = useState({ show: false, datos: null });
  if (props.datos != null) {
    // const {tituloPelicula,enlaceTrailer} = props.datos
    return (
      <>
        <Modal show={props.show} onHide={props.onHide} size="lg" scrollable>
          <Modal.Header
            className="bg-black border-bottom-0 closeButton"
            closeButton>
            <Modal.Title>{props.datos.tituloPelicula}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <iframe
              src={props.datos.enlaceTrailer}
              width="100%"
              height="440"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen></iframe>
          </Modal.Body>
          <Modal.Footer className="bg-black">
            <Button variant="secondary btn-modal-cerrar" onClick={props.onHide}>
              Cerrar
            </Button>
            <Button
              variant="primary"
              className="btn-ver-pelicula"
              onClick={() => setModalShow({ show: true })}>
              Ver Película
            </Button>
          </Modal.Footer>
        </Modal>
        <Sesion
          show={modalShow.show}
          onHide={() => setModalShow({ show: false })}
        />
      </>
    );
  }
}

export default Trailer;
