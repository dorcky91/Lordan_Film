import React from "react";
import ListaPelicula from "../../CARPETA_PELICULAS/peliculas.json";
import useCinemaJson from "../../CARPETA_COMPONENTES/CinemaCard/useCinemaJson";
import CinemaCard from "../../CARPETA_COMPONENTES/CinemaCard/CinemaCard";

function Musical() {
  const filteredPelicula = useCinemaJson();
  return (
    <>
      <CinemaCard
        peliculas={filteredPelicula}
        titulo="Lista De Películas Musical"
      />
    </>
  );
}

export default Musical;
