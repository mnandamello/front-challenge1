import React from "react";
import "./Perfil.css";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Progresso1 from "../Progresso/Progresso1";








export default function Perfil() {
  return (
    <div>
      <div className="container-mobile">
        <div className="div-header">
          <Header />
        </div>
        <div className="background-page-escolha">
          <div className="div-card">
            <div className="div-prog1">
                <Progresso1/>
            </div>
            <div className="imagem-escolha">
              <div className="div-conteudo">
                <form>
                  <div className="titulos">
                    <legend>Formulário Pessoal</legend>
                    <p> Escolha a opção para preencher o formulário</p>
                  </div>
                  <div className="custom-2">
                    <div className="bolinha-select-b">
                      <input
                        className="radio"
                        type="radio"
                        id="ckeck1-b"
                        name="theradio"
                        checked
                      />
                      <label htmlFor="check1" className="lb1">
                        Pessoa Fisica
                      </label>
                    </div>

                    <div className="bolinha-select-b">
                      <input
                        className="radio"
                        type="radio"
                        id="ckeck2-b"
                        name="theradio2"
                        disabled
                      />
                      <label htmlFor="check2" className="lb2">
                        Pessoa Juridca
                      </label>
                    </div>
                  </div>

                  <div className="div-btn">
                    <Link to="/formPessoal">
                      <Button />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
