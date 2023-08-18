import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import ListaPelicula from "../../CARPETA_PELICULAS/Accion/Accion.json";

const useCinemaJson = () => {
  const categoria = useLocation().pathname.replace("/", "");

  const [datos, setDatos] = useState(ListaPelicula[categoria]);
  const [filteredPelicula, setFilteredPelicula] = useState(datos);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    const valorInput = e.srcElement.value;
    setSearch(valorInput);
    if (valorInput) {
      const filtro = datos.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(valorInput.toLowerCase())
      );
      setFilteredPelicula(filtro);
    } else {
      setFilteredPelicula(datos);
    }
  };

  useEffect(() => {
    var node = document.getElementById("inpBusqueda");
    var element = ReactDOM.findDOMNode(node);
    element.addEventListener("input", handleChange);
  }, []);

  return filteredPelicula;
};

export default useCinemaJson;
