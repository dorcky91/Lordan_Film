import React from "react";
import Hero from "../../CARPETA_COMPONENTES/Hero/Hero";
import slidefilm from "../../film.json";
import IntroCard from "../../CARPETA_COMPONENTES/IntroCard/IntroCard";
import ListaPelicula from "../DetallesPeliculas/DetallesPeliculas.json";

function DetallesPeliculas() {
  $(document).ready(function () {
    $("#categorias").on(
      "load",
      controlarCarousel(5, "categorias", 4000, true, 2, 3)
    );
    $("#novedades").on(
      "load",
      controlarCarousel(3, "novedades", 500, true, 1, 2)
    );
    $("#populares").on(
      "load",
      controlarCarousel(4, "populares", 800, true, 1, 2)
    );
    $("#recomendadas").on(
      "load",
      controlarCarousel(4, "recomendadas", 1000, true, 1, 2)
    );
  });

  return (
    <>
      <Hero slidesHero={slidefilm} />
      <IntroCard
        id="categorias"
        tituloGeneral={"Categoría"}
        subtituloGeneral={" Diversión Pura"}
        tarjetas={ListaPelicula.Categorias}
      />

      <IntroCard
        id="novedades"
        tituloGeneral={"Novedades"}
        subtituloGeneral={" La Referencia"}
        tarjetas={ListaPelicula.Novedades}
      />

      <IntroCard
        id="populares"
        tituloGeneral={"Más Populares"}
        subtituloGeneral={" El Mundo Cine"}
        tarjetas={ListaPelicula.Populares}
      />

      <IntroCard
        id="recomendadas"
        tituloGeneral={"Recomendadas"}
        subtituloGeneral={" Vive La Passión"}
        tarjetas={ListaPelicula.Recomendadas}
      />
    </>
  );
}

export default DetallesPeliculas;
