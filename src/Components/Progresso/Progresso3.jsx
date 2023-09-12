import React from 'react'
import './Progresso3.css'
import group3 from '../../assets/grupo-bol-4.png'
import g3bolved1 from '../../assets/bol-1-verde.png'
import g3bolved2 from '../../assets/bol-2-verde.png'
import { Link } from 'react-router-dom'

export default function Progresso3() {
  return (
    <div>
      <div className="div-group2">
        <Link to='/formPessoal'><img className='gebolved1' src={g3bolved1} alt="" /></Link>
        <Link to='/formBike'><img className='gebolved2' src={g3bolved2} alt="" /></Link>
        <img className='group3' src={group3} alt="" />
      </div>
    </div>
  )
}
