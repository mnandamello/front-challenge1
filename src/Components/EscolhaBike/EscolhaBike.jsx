import React from 'react'
import './EscolhaBike.css'
import avancar from '../../assets/seta-avancar.svg'
import back from '../../assets/imgLinkBack.svg'
import { Link } from 'react-router-dom'

export default function EscolhaBike() {
  return (
    <div>
      <div className="container-escolha">
        <div className="div-quadrado">
          <div className="div-infos">
            <div className="div-textos">
              <p className='title'>Minha Bicicleta</p>
              <p className='modelo-marca'>CALOI/CL1232</p>
              <p className='data-aq'>Aquisição do seguro: </p>
            </div>
            <div className="link-proximo">
              <Link to='/docBike'><img src={avancar} alt="" /></Link>
            </div>
          </div>
          <div className="back">
            <Link to='/documentos'><img src={back} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
