import React from "react";
import Menu from "../../CARPETA_COMPONENTES/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../CARPETA_COMPONENTES/Footer/Footer";

export default function Home() {
  return (
    <>
      <Menu />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
