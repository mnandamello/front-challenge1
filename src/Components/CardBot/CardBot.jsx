import React from 'react'
import './CardBot.css'
import back from '../../assets/imgLinkBack.svg'
import { Link } from 'react-router-dom'

export default function CardBot() {
  return (
    <div>
      <div className="div-container-bot">
        <div className="container-slider-bot">
            <p>Aqui será onde irá aparecer o nosso bot</p>
          <div className="back-carrossel-bot">
            <Link to='/docBike'><img src={back} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
