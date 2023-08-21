import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Trailer from "../Trailer/Trailer";
import Sesion from "../Sesion/Sesion";
import "../Hero/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

function Hero({ slidesHero }) {
  const [index, setIndex] = useState(0);
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

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        controls={false}
        activeIndex={index}
        onSelect={handleSelect}
        id="carousel-hero">
        {slidesHero.map((slidefilm) => (
          <Carousel.Item
            key={slidefilm.portada}
            interval={slidefilm.interval}
            className="carousel-item-hero">
            <img
              className="d-block w-100"
              src={slidefilm.portada}
              alt="First slide"
            />
            <Container fluid>
              <Row>
                <Carousel.Caption>
                  <Col xs={10} md={5} lg={4} className="text-start">
                    <h1>{slidefilm.titulo}</h1>
                    <h5>{slidefilm.director}</h5>
                    <h6>{slidefilm.anio}</h6>
                    <p>{slidefilm.descripcion}</p>
                    <Button
                      className="btn-hero me-3"
                      onClick={() => setModalSesionShow({ show: true })}>
                      Ver Ahora
                    </Button>
                    <Button
                      className="btn-trailer"
                      onClick={() =>
                        setModalTrailerShow({
                          show: true,
                          datos: {
                            tituloPelicula: slidefilm.titulo,
                            enlaceTrailer: slidefilm.enlaceTrailer,
                            enlacePelicula: slidefilm.enlacePelicula,
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
                        className="me-3 fs-4 btn-share"
                        onClick={() => setModalSesionShow({ show: true })}
                      />
                      <FontAwesomeIcon
                        icon={faDownload}
                        className=" fs-4 btn-download"
                        onClick={() => setModalSesionShow({ show: true })}
                      />
                    </div>
                  </Col>
                </Carousel.Caption>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
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

export default Hero;
