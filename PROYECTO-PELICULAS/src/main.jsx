import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./CARPETA_PELICULAS/Home/Home.jsx";
import DetallesPeliculas from "./AccionList/DetallesPeliculas/DetallesPeliculas.jsx";
import Accion from "./CARPETA_PELICULAS/Accion/Accion.jsx";
import Comedia from "./CARPETA_PELICULAS/Comedia/Comedia";
import Drama from "./CARPETA_PELICULAS/Drama/Drama";
import Romance from "./CARPETA_PELICULAS/Romance/Romance";
import CienciaFiccion from "./CARPETA_PELICULAS/C&F/CienciaFiccion";
import Terror from "./CARPETA_PELICULAS/Terror/Terror";
import Fantasia from "./CARPETA_PELICULAS/Fantasia/Fantasia";
import Aventura from "./CARPETA_PELICULAS/Aventura/Aventura";
import Deporte from "./CARPETA_PELICULAS/Deportes/Deporte";
import Musical from "./CARPETA_PELICULAS/Musical/Musical";
import Documental from "./CARPETA_PELICULAS/Documental/Documental";
import Favoritas from "./CARPETA_PELICULAS/Favoritas/Favoritas";
import Detalles from "./CARPETA_COMPONENTES/Detalles/Detalles";
import Aviso from "./CARPETA_COMPONENTES/Aviso/Aviso";
import Sesion from "./CARPETA_COMPONENTES/Sesion/Sesion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <h1 className="p-4 fs-3">
        Contenido no encontrado...Vuelve a intentar con nuevos datos.
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <DetallesPeliculas />,
      },

      {
        path: "/Accion",
        element: <Accion />,
      },

      {
        path: "/Comedia",
        element: <Comedia />,
      },

      {
        path: "/Drama",
        element: <Drama />,
      },

      {
        path: "/Romance",
        element: <Romance />,
      },

      {
        path: "/CienciaFiccion",
        element: <CienciaFiccion />,
      },

      {
        path: "/Terror",
        element: <Terror />,
      },

      {
        path: "/Fantasia",
        element: <Fantasia />,
      },

      {
        path: "/Aventura",
        element: <Aventura />,
      },

      {
        path: "/Deporte",
        element: <Deporte />,
      },

      {
        path: "/Musical",
        element: <Musical />,
      },

      {
        path: "/Documental",
        element: <Documental />,
      },

      {
        path: "/Favoritas",
        element: <Favoritas />,
      },

      {
        path: "/:Peliculas",
        element: <Detalles />,
      },

      {
        path: "/Aviso",
        element: <Aviso />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
