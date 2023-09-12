import "./FormPessoal.css";
import Button from "../Button/Button";
import Header from "../Header/Header";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  Nome : yup.string().required("O nome precisa ser preenchido"),
  DtNascimento : yup.string().required("A data de nascimento é obrigatória"),
  CPF : yup.string().required("O CPF é obrigatório"),
  Celular : yup.string().required("O celular é obrigatório"),
  Cep : yup.string().required("O CEP é obrigatório"),
  Cidade : yup.string().required("A cidade é obrigatória"),
  Logradouro : yup.string().required("O logradouro é obrigatório"),
  Número : yup.string().required("O número é obrigatório"),
  Estado : yup.string().required("O estado é obrigatório"),
  Complemento : yup.string().required("O complemento é obrigatório"),
}).required();



export default function FormPessoal() {
  
  const {register, handleSubmit, formState: {errors}, setFocus, setValue} = useForm({resolver : yupResolver(schema)})
  const [formPessoal, setformPessoal] = useState ({'Nome' : '', 'DtNascimento':'', 'CPF':'', 'Celular':'', 'Cep':'', 'Cidade':'', 'Logradouro':'', 'Número':'', 'Estado':'', 'Complemento':''})
  const [listaForm, setlistaForm] = useState([])

  function inserirFormPessoal(FormPessoal){
    setlistaForm([...listaForm, FormPessoal])
    window.location.href = '/doccliente';
  }

  function cadCliente(e){
    setformPessoal({...formPessoal,[e.target.name]: e.target.value})
  }
  return (
  <div>
    <div className="header-mobile-pessoal">
      <Header/>
    </div>
    <div className="body-forms-pesssoal">
      <div className="backgraound-pessoal">
        <div className="form-fundo-pessoal">
          <div className="form-cont-pessoal">
            <form action="/doccliente" onSubmit={handleSubmit(inserirFormPessoal)}>
              <legend>Formulário Pessoa Fisica</legend>

              <input
                id="nome"
                type="text"
                placeholder="Nome"
                onChange={cadCliente}
                {...register("Nome")}
              />
              <span>{ errors.Nome?.message }</span>

              <div className="duble-pessoal">
                <input
                  id="dt-nascimento"
                  type="date"
                  placeholder="Dt.Nascimento"
                  {...register("DtNascimento")}
                />

                <input
                  id="cpf"
                  type="text"
                  placeholder="CPF"
                  {...register("CPF")}
                />
              </div>

              <input
                  id="celular"
                  type="number"
                  placeholder="Celular"
                  {...register("Celular")}
                />

              <div className="duble-pessoal">
                <input
                  id="cep"
                  type="number"
                  placeholder="Cep"
                  {...register("Cep")}
                />

                <input
                  id="cidade"
                  type="text"
                  placeholder="Cidade"
                  {...register("Cidade")}
                />
              </div>


              <input
                id="logradouro"
                type="text"
                placeholder="Logradouro"
                {...register("Logradouro")}
              />

              <div className="duble-pessoal">
                <input 
                  id="numero"
                  type="number"
                  placeholder="Número"
                  {...register("Número")}
                />

                <input
                  id="estado"
                  type="text"
                  placeholder="Estado"
                  {...register("Estado")}
                />
              </div>

              <input
                id="complemento"
                type="text"
                placeholder="Complemento"
                {...register("Complemento")}
              />

              <div id="valid-pessoal" className="valid-pessoal">
                <Button/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}