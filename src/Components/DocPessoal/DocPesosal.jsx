import React from 'react'
import './DocPessoa.css'
import back2 from '../../assets/imgLinkBack.svg'
import { Link } from 'react-router-dom'

export default function DocPesosal(props) {
  return (
  <div>
    <div className="container-doc-pessoal">
        <div className="div-quadrado-info">
          <div className="infos-pessoais">
            <div className="title3">
              <h3>Informações do Proprietário</h3>
            </div>
            <div className="nome">
              <p className='negrito2'>Nome completo:</p>
              <p className='cinza2'>Maria Fernanda Ribeiro Mello</p>
            </div>
            <div className="nascimento-cpf">
              <div className="nascimento">
                <p className='negrito2'>Dt.nascimento:</p>
                <p className='cinza2'>12/07/2004</p>
              </div>
              <div className="cpf">
                <p className='negrito2'>CPF:</p>
                <p className='cinza2'>000.000.000-99</p>
              </div>
            </div>
            <div className="celular">
              <p className='negrito2'>Celular:</p>
              <p className='cinza2'>11999999999</p>
            </div>
            <div className="cidade-cep">
              <div className="cidade">
                <p className='negrito2'>Cidade:</p>
                <p className='cinza2'>Mogi das Cruzes</p>
              </div>
              <div className="cep">
                <p className='negrito2'>CEP:</p>
                <p className='cinza2'>08743120</p>
              </div>
            </div>
            <div className="logradouro">
              <p className='negrito2'>Logradouro:</p>
              <p className='cinza2'>Rua Viscode de Mauá</p>
            </div>
            <div className="num-estado">
              <div className="numero">
                <p className='negrito2'>Número:</p>
                <p className='cinza2'>86</p>
              </div>
              <div className="estado">
                <p className='negrito2'>Estado:</p>
                <p className='cinza2'>SP</p>
              </div>
            </div>
            <div className="complemento">
              <p className='negrito2'>Complemento:</p>
              <p className='cinza2'>Minha Casa</p>
            </div>
          </div>
          <div className="back4">
            <Link to='/documentos'><img src={back2}alt="" /></Link>
          </div>
        </div>
    </div>
  </div>
  )
}
