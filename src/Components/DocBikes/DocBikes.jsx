import React from 'react'
import './DocBikes.css'
import back1 from '../../assets/imgLinkBack.svg'
import galeria from '../../assets/img-galeria.svg'
import { Link } from 'react-router-dom'

export default function DocBikes() {
  return (
    <div>
      <div className="container-doc-bike">
        <div className="div-quadrados-infos">
          <div className="info-bike">
            <div className="title1">
              <h3>Informações da Bicicleta</h3>
            </div>
            <div className="marca-bk">
              <p className='negrito'>Marca Bike</p>
              <p className='cinza'>Caloi</p>
            </div>
            <div className="modelo-bk">
            <p className='negrito'>Modelo da Bike</p>
            <p className='cinza'>City Tour Comp</p>
            </div>
            <div className="valor-ano">
              <div className="valor-bk">
                <p className='negrito'>Valor da Bike</p>
                <p className='cinza'>4700</p>
              </div>
              <div className="ano-bk">
                <p className='negrito'> Ano de compra da Bike</p>
                <p className='cinza'>2018</p>
              </div>
            </div>
            <div className="nf-bk">
              <p className='negrito'>Nota fiscal da bike</p>
              <p className='cinza'>000000000000</p>
            </div>
          </div>
          <div className="info-ac">
            <div className="title2">
                <h3>Informações dos acessórios</h3>
              </div>
              <div className="marca-ac">
                <p className='negrito'>Marca do Acessório</p>
                <p className='cinza'>Multilaser</p>
              </div>
              <div className="modelo-ac">
                <p className='negrito'>Modelo do Acessório</p>
                <p className='cinza'>GPS Atrio Iron</p>
              </div>
              <div className="tipo-valor-ac">
                <div className="tipo-ac">
                    <p className='negrito'>Tipo do Acessório</p>
                    <p className='cinza'>GPS</p>
                </div>
                <div className="valor-ac">
                  <p className='negrito'>Valor do Acessório</p>
                  <p className='cinza'>130</p>
                </div>
              </div>
              <div className="nf-ac">
                <p className='negrito'>Nota fiscal do acessório</p>
                <p className='cinza'>000000000000</p>
              </div>
            </div>
            <div className="info-fotos">
              <div className="texto-foto">
                <p className='p-bike'>Acessar fotos da bicicleta</p>
              </div>
              <div className="img-galeria">
                <Link to='/carrosel'><img src={galeria} alt="" /></Link>
              </div>
            </div>
            <div className="back1">
              <Link to='/escolhaBike'><img src={back1} alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
  )
}
