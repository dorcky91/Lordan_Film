import { useState } from "react";
import "../IntroCard/IntroCard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Trailer from "../Trailer/Trailer";
import Sesion from "../Sesion/Sesion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Peliculas({ id, tituloGeneral, subtituloGeneral, tarjetas }) {
  const [modalTrailerShow, setModalTrailerShow] = useState({
    show: false,
    datos: null,
  });
  const [modalSesionShow, setModalSesionShow] = useState({
    show: false,
    datos: null,
  });
  const [isLiked, setIsliked] = useState(false);
  function handlerLike() {
    setIsliked(!isLiked);
  }
  return (
    <>
      <Container fluid id={id}>
        <div className="carousel-category pb-5 pt-4">
          <h4 className=" text-white tituloGeneral">{tituloGeneral} </h4>
          <span className="subtituloGeneral">{subtituloGeneral}</span>
          <div className="owl-container">
            <div className="owl-carousel owl-theme text-uppercase text-center">
              {tarjetas.map((tarjeta, index) => (
                <div key={index} className="item">
                  <img loading="lazy" src={tarjeta.rutaImg} alt="" />
                  <div className="detalles">
                    {tarjeta.categoria && (
                      <Link
                        to={tarjeta.url}
                        className="text-decoration-none stretched-link">
                        <h6 className="py-2 text-white categoria">
                          {tarjeta.categoria}
                        </h6>
                      </Link>
                    )}
                    <h5 className="text-start text-capitalize p-1">
                      {tarjeta.titulo}
                    </h5>
                    <p className=" text-start small p-1">{tarjeta.sinopsis}</p>
                    <Container fluid>
                      <Row>
                        <Col className="text-start">
                          <Button
                            className="btn-hero btn-sm me-2"
                            onClick={() => setModalSesionShow({ show: true })}>
                            Ver Ahora
                          </Button>
                          <Button
                            className="bg-black btn-trailer btn-sm"
                            onClick={() =>
                              setModalTrailerShow({
                                show: true,
                                datos: {
                                  tituloPelicula: tarjeta.titulo,
                                  enlaceTrailer: tarjeta.enlaceTrailer,
                                  enlacePelicula: tarjeta.enlacePelicula,
                                },
                              })
                            }>
                            Trailer
                          </Button>
                          <div className="mt-3">
                            <span className="btn-like" onClick={handlerLike}>
                              {isLiked ? (
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  className="me-3 fs-5 btnFavorito"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  className="me-3 fs-5"
                                />
                              )}
                            </span>
                            <FontAwesomeIcon
                              icon={faShareNodes}
                              className="me-3 fs-5 btn-share"
                              onClick={() => setModalSesionShow({ show: true })}
                            />
                            <FontAwesomeIcon
                              icon={faDownload}
                              className=" fs-5 btn-download"
                              onClick={() => setModalSesionShow({ show: true })}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Sesion
        show={modalSesionShow.show}
        onHide={() => setModalSesionShow({ show: false })}
      />
      <Trailer
        show={modalTrailerShow.show}
        datos={modalTrailerShow.datos}
        onHide={() => setModalTrailerShow({ show: false, datos: null })}
      />
    </>
  );
}

export default Peliculas;
