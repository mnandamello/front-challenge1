import React from 'react'
import './Progresso2.css'
import group2 from '../../assets/grupo-bol-2.png'
import bolved1 from '../../assets/bol-1-verde.png'
import { Link } from 'react-router-dom'

export default function Progresso2() {
  return (
    <div>
      <div className="div-group2">
        <Link to='/formPessoal'><img className='bolved1' src={bolved1} alt="" /></Link>
        <img className='group2' src={group2} alt="" />
      </div>
    </div>
  )
}
