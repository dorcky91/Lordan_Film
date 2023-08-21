import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Sesion from "../Sesion/Sesion";
import "../Detalles/Detalles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

function Detalles(props) {
  if (props.datos != null) {
    const pelicula = props.datos;
    const [isLiked, setIsliked] = useState(false);
    const [modalSesionShow, setModalSesionShow] = useState({
      show: false,
      datos: null,
    });
    function handlerLike() {
      setIsliked(!isLiked);
    }

    // const {tituloPelicula,enlaceTrailer} = props.datos
    return (
      <>
        <Modal show={props.show} onHide={props.onHide} size="lg" scrollable>
          <Modal.Header className="text-black" closeButton>
            <Modal.Title>{pelicula.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-black">
            <div className="row gy-4 ">
              <div className="col-lg-6">
                <img
                  className="w-100 h-100 object-fit-cover rounded-3"
                  src={pelicula.portada}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <h5>{pelicula.director}</h5>
                <h6>{pelicula.anio}</h6>
                <h6>{pelicula.duracion}</h6>
                <h6 className="fw-normal mb-4">{pelicula.sinopsis}</h6>
                <div>
                  <Button
                    className="btn-hero btn-sm me-2"
                    onClick={() => setModalSesionShow({ show: true })}>
                    Ver Ahora
                  </Button>
                  <Button
                    className="bg-black btn-trailer btn-sm"
                    onClick={() => setModalSesionShow({ show: true })}>
                    Trailer
                  </Button>
                  <div className="mt-3">
                    <span onClick={handlerLike}>
                      {isLiked ? (
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="me-3 fs-5 btn-like btnFavorito"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="me-3 fs-5 btn-like"
                        />
                      )}
                    </span>
                    <FontAwesomeIcon
                      icon={faShareNodes}
                      className="me-3 
                  fs-5 btn-share"
                      onClick={() => setModalSesionShow({ show: true })}
                    />
                    <FontAwesomeIcon
                      icon={faDownload}
                      className=" fs-5 btn-download"
                      onClick={() => setModalSesionShow({ show: true })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Sesion
          show={modalSesionShow.show}
          onHide={() => setModalSesionShow({ show: false })}
        />
      </>
    );
  }
}

export default Detalles;
