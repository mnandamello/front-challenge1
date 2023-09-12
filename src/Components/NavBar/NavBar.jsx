import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import PageInfoInicial from "../../Pages/PaginasDoCliente/PageInfoInicial";

import PESSOAL from "../../assets/PESSOAL.svg";
import Criador from "../../assets/Criador.svg";
import Chat from "../../assets/Chat.svg";

export default function NavBar() {
  return (
    <>
        <div className="fundo">
        <div className="svgs">
          <Link to='/documentos'><img src={PESSOAL} alt="" /></Link>
          <Link to='/squad'><img src={Criador} alt="" /></Link>
          <img src={Chat} alt="" />
        </div>
      </div>
    </>
  );
}
