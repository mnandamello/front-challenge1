import React , { useState } from "react";
import "./FormAcessorio.css";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Progresso3 from "../Progresso/Progresso3";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  Marca : yup.string().required(),
  Modelo : yup.string().required(),
  Tipo : yup.string().required(),
  Valor : yup.string().required(),
  NotaFiscal : yup.string().required(),
}).required();

export default function FormAcessorio() {

  const {register, handleSubmit, formState: {errors}, setFocus, setValue} = useForm({resolver : yupResolver(schema)})

  const [formAc, setformAc] = useState ({'Marca' : '', 'Modelo':'', 'Tipo':'', 'Valor':'', 'NotaFiscal':''})

  const [listaForm, setlistaForm] = useState([])

  function inserirFormAc(FormAcessorio){
    setlistaForm([...listaForm, FormAcessorio])
    window.location.href = '/fotosBk';
  }

  
  return (
    <div>
      <div className="header-mobile-pessoal">
        <Header/>
      </div>
      <div className="body-form-ac">
        <div className="bg">
          <div className="div-prog1">
            <Progresso3/>
          </div>
          <div className="fundo-img">
            <div className="form-ac">
              <form action="/fotosBk" onSubmit={handleSubmit(inserirFormAc)}>
                <legend>Informações do Acessório</legend>
                <input
                  id="marcaC"
                  type="text"
                  placeholder="Marca"
                  {...register("Marca")}
                />

                <input
                  id="modeloC"
                  type="text"
                  placeholder="Modelo"
                  {...register("Modelo")}
                />

                <div className="flex">
                  <input
                    id="tipoC"
                    type="text"
                    placeholder="Tipo"
                    {...register("Tipo")}
                  />

                  <input
                    id="valorC"
                    type="number"
                    placeholder="Valor"
                    {...register("Valor")}
                  />
                </div>

                <input
                  id="nfC"
                  type="number"
                  placeholder="Nota Fiscal"
                  {...register("NotaFiscal")}
                />

                <div className="validAc">
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
