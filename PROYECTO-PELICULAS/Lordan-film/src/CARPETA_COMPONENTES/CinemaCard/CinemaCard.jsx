import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../CinemaCard/CinemaCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CinemaCard(props) {
  const { peliculas, titulo } = props;

  return (
    <>
      <Container className="pt-4">
        <h4 className="mb-5 pelicula-genero">{titulo}</h4>

        <Row className="gy-5">
          {peliculas.map((pelicula, index) => (
            <Col key={index} sm={6} md={6} lg={3}>
              <Link to={"/watch/30"} className="text-decoration-none">
                <Card className="h-100 border-0 w-100 card-peliculas">
                  <Card.Img
                    className="object-fit-cover  w-100"
                    variant="top"
                    src={pelicula.portada}
                    height={300}
                  />
                  <Card.Body className="container-pelicula">
                    <Card.Title>{pelicula.titulo}</Card.Title>
                    <p className="small mb-1">{pelicula.director}</p>
                    <p className="small mb-0">{pelicula.anio}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CinemaCard;
