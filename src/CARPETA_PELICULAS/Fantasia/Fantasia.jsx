import React from "react";
import ListaPelicula from "../Accion/Accion.json";
import useCinemaJson from "../../CARPETA_COMPONENTES/CinemaCard/useCinemaJson";
import CinemaCard from "../../CARPETA_COMPONENTES/CinemaCard/CinemaCard";

function Fantasia() {
  const filteredPelicula = useCinemaJson();
  return (
    <>
      <CinemaCard
        peliculas={filteredPelicula}
        titulo="Lista De Películas De Fantasía"
      />
    </>
  );
}

export default Fantasia;
