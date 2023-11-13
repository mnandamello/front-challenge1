import "./FormsBike.css";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Progresso2 from "../Progresso/Progresso2";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation  } from 'react-router-dom';

const schema = yup.object({
  Marca : yup.string().required(),
  Modelo : yup.string().required(),
  Valor : yup.string().required(),
  AnoDeCompra : yup.string().required(),
  NotaFiscal : yup.string().required(),
}).required();

export default function FormsBike() {

  const {register, formState: {errors}, setFocus, setValue} = useForm({resolver : yupResolver(schema)})

  const [formBk, setformBk] = useState ({'marca' : '', 'modelo':'', 'valor':'', 'anoDeCompra':'', 'nf':''})

  const [listaForm, setlistaForm] = useState([])

  function inserirFormBk(FormsBike){
    setlistaForm([...listaForm, FormsBike])
    
  }

  let {id} = useParams('editar');

  const [novo, setNovo] = useState({
    codigo:id,
    marca:"",
    modelo:"",
    anoDeCompra:"",
    valor:"",
    nf:""
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
    fetch(`http://localhost/bicicleta`, {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novo),
    }).then(() => {
      window.location.href = '/formAc';
    });
  }; 

  useEffect(() => {
    if (id) {
        // O código aqui permanece o mesmo, obtendo dados do usuário por ID
        fetch(`http://localhost/bicicleta/${id}`)
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
              <form action="/formAc" onSubmit={handleSubmit}>
                <legend>Informações da Bike</legend>
                <input
                  id="marca"
                  type="text"
                  value={novo.marca}
                  onChange={handleChange}
                  placeholder="Marca"
                  name="marca"
                />

                <input
                  id="modelo"
                  type="text"
                  value={novo.modelo}
                  onChange={handleChange}
                  placeholder="Modelo"
                  name="modelo"
                />

                <div className="duble">
                  <input
                    id="valor"
                    type="number"
                    value={novo.valor}
                    onChange={handleChange}
                    placeholder="Valor"
                    name="valor"
                  />

                  <input
                    id="ano"
                    type="number"
                    value={novo.anoDeCompra}
                    onChange={handleChange}
                    placeholder="Ano de Compra"
                    name="anoDeCompra"
                  />
                </div>

                <input
                  id="nf"
                  type="number"
                  value={novo.nf}
                  onChange={handleChange}
                  placeholder="Nota Fiscal"
                  name="nf"
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
