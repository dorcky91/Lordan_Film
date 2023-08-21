import React from "react";
import ListaPelicula from "../../CARPETA_PELICULAS/peliculas.json";
import useCinemaJson from "../../CARPETA_COMPONENTES/CinemaCard/useCinemaJson";
import CinemaCard from "../../CARPETA_COMPONENTES/CinemaCard/CinemaCard";

function Comedia() {
  const filteredPelicula = useCinemaJson();
  return (
    <>
      <CinemaCard
        peliculas={filteredPelicula}
        titulo="Lista De Películas De Comedia"
      />
    </>
  );
}

export default Comedia;
