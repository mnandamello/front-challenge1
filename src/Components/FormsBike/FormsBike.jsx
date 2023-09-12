import React, { useState } from "react";
import "./FormsBike.css";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Progresso2 from "../Progresso/Progresso2";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  Marca : yup.string().required(),
  Modelo : yup.string().required(),
  Valor : yup.string().required(),
  AnoDeCompra : yup.string().required(),
  NotaFiscal : yup.string().required(),
}).required();

export default function FormsBike() {

  const {register, handleSubmit, formState: {errors}, setFocus, setValue} = useForm({resolver : yupResolver(schema)})

  const [formBk, setformBk] = useState ({'Marca' : '', 'Modelo':'', 'Valor':'', 'AnoDeCompra':'', 'NotaFiscal':''})

  const [listaForm, setlistaForm] = useState([])

  function inserirFormBk(FormsBike){
    setlistaForm([...listaForm, FormsBike])
    window.location.href = '/';
  }

  return (
    <div>
      <div className="header-mobile">
        <Header/>
      </div>
      <div className="body-forms">
        <div className="backgraound">
          <div className="div-prog1">
            <Progresso2/>
          </div>
          <div className="form-fundo">
            <div className="form-cont">
              <form action="/" onSubmit={handleSubmit(inserirFormBk)}>
                <legend>Informações da Bike</legend>
                <input
                  id="marca"
                  type="text"
                  placeholder="Marca"
                  {...register("Marca")}
                />

                <input
                  id="modelo"
                  type="text"
                  placeholder="Modelo"
                  {...register("Modelo")}
                />

                <div className="duble">
                  <input
                    id="valor"
                    type="number"
                    placeholder="Valor"
                    {...register("Valor")}
                  />

                  <input
                    id="ano"
                    type="number"
                    placeholder="Ano de Compra"
                    {...register("AnoDeCompra")}
                  />
                </div>

                <input
                  id="nf"
                  type="number"
                  placeholder="Nota Fiscal"
                  {...register("NotaFiscal")}
                />

                <div className="validB">
                  <Button />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
