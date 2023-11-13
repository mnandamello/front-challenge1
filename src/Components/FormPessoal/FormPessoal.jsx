import "./FormPessoal.css";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Progresso1 from "../Progresso/Progresso1";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation  } from 'react-router-dom';

const schema = yup.object({
  Nome : yup.string().required(),
  DtNascimento : yup.string().required(),
  CPF : yup.string().required(),
  Celular : yup.string().required(),
  Cep : yup.string().required(),
  Cidade : yup.string().required(),
  Logradouro : yup.string().required(),
  Numero : yup.string().required(),
  Estado : yup.string().required(),
  Complemento : yup.string().required(),
}).required();



export default function FormPessoal() {
  
  const {register, formState: {errors}, setFocus, setValue} = useForm({resolver : yupResolver(schema)})

  const [formPessoal, setformPessoal] = useState ({'nome' : '', 'nascimento':'', 'cpf':'', 'celular':'', 'cep':'', 'cidade':'', 'logradouro':'', 'numero':'', 'estado':'', 'complemento':''})
  ''
  const [listaForm, setlistaForm] = useState([])

  function inserirFormPessoal(FormPessoal){
    setlistaForm([...listaForm, FormPessoal])
    window.location.href = '/formBike';
  }

  let {id} = useParams('editar');

  const [novo, setNovo] = useState({
    codigo:id,
    nome:"",
    nascimento:"",
    cpf:"",
    celular:"",
    cep:"",
    cidade:"",
    logradouro:"",
    numero:"",
    estado:"",
    complemento:""

});

  let metodo = "post";

  if(id){
      metodo = "put"
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dataNascimento") {
        // Formatar a data para o estilo "AAAA-MM-DD"
        const dataFormatada = new Date(value).toISOString().split('T')[0];

        setNovo((prevState) => ({
            ...prevState,
            [name]: dataFormatada,
            endereco: {
                ...prevState.endereco,
                [name]: dataFormatada,
            },
        }));
    } else {
        setNovo((prevState) => ({
            ...prevState,
            [name]: value,
            endereco: {
                ...prevState.endereco,
                [name]: value,
            },
        }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost/cliente`, {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novo),
    }).then(() => {
        window.location.href = '/formBike';
    });
  }; 

  useEffect(() => {
    if (id) {
        // O código aqui permanece o mesmo, obtendo dados do usuário por ID
        fetch(`http://localhost/cliente/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setNovo(data);
            })
            .catch((error) => {
                console.error('Erro ao obter dados do usuário:', error);
            });
    } else if (location.state?.usuario) {
        // Use o estado passado do componente Cadastro
        setNovo(location.state.usuario);
    }
}, [id, location.state]);

      
  return (
  <div>
    <div className="header-mobile-pessoal">
      <Header/>
    </div>
    <div className="body-forms-pesssoal">
      <div className="backgraound-pessoal">
        <div className="div-prog1">
          <Progresso1/>
        </div>
        <div className="form-fundo-pessoal">
          <div className="form-cont-pessoal">
            <form action="/formBike" onSubmit={handleSubmit}>
              <legend>Formulário Pessoa Fisica</legend>
  
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                onChange={handleChange}
                value={novo.nome}
                name="nome"
              />
  
              <div className="duble-pessoal">
                <input
                  id="dt-nascimento"
                  type="date"
                  onChange={handleChange}
                  value={novo.nascimento}
                  placeholder="Dt.Nascimento"
                  name="nascimento"
                />
  
                <input
                  id="cpf"
                  type="text"
                  value={novo.cpf}
                  onChange={handleChange}
                  placeholder="CPF"
                  name="cpf"

                />
              </div>
  
              <input
                  id="celular"
                  type="number"
                  value={novo.celular}
                  onChange={handleChange}
                  placeholder="Celular"
                  name="celular"
                />
  
              <div className="duble-pessoal">
                <input
                  id="cep"
                  type="number"
                  value={novo.cep}
                  onChange={handleChange}
                  placeholder="Cep"
                  name="cep"
                />
  
                <input
                  id="cidade"
                  type="text"
                  value={novo.cidade}
                  onChange={handleChange}
                  placeholder="Cidade"
                  name="cidade"
                />
              </div>
  
  
              <input
                id="logradouro"
                type="text"
                value={novo.logradouro}
                onChange={handleChange}
                placeholder="Logradouro"
                name="logradouro"
              />
  
              <div className="duble-pessoal">
                <input 
                  id="numero"
                  type="number"
                  value={novo.numero}
                  onChange={handleChange}
                  placeholder="Número"
                  name="numero"
                />
  
                <input
                  id="estado"
                  type="text"
                  value={novo.estado}
                  onChange={handleChange}
                  placeholder="Estado"
                  name="estado"
                />
              </div>
  
              <input
                id="complemento"
                type="text"
                value={novo.complemento}
                onChange={handleChange}
                placeholder="Complemento"
                name="complemento"
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
};