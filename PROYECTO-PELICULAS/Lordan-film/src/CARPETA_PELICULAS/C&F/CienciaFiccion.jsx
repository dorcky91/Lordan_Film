import React from "react";
import CinemaCard from "../../CARPETA_COMPONENTES/CinemaCard/CinemaCard";
import useCinemaJson from "../../CARPETA_COMPONENTES/CinemaCard/useCinemaJson";

function CienciaFiccion() {
  const filteredPelicula = useCinemaJson();

  return (
    <>
      <CinemaCard
        peliculas={filteredPelicula}
        titulo="Lista De Películas De Ciencia Ficción"
      />
    </>
  );
}

export default CienciaFiccion;
