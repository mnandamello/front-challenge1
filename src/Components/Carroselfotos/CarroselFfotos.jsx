import React from 'react'
import './CarroselFotos.css'
import back from '../../assets/imgLinkBack.svg'
import { Link } from 'react-router-dom'

export default function CarroselFotos() {

  
  return (
    <div>
      <div className="div-container-fotos">
        <div className="container-slider">
            <p>Aqui terá um carrossel com as fotos tiradas</p>
          <div className="back-carrossel">
            <Link to='/docBike'><img src={back} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
