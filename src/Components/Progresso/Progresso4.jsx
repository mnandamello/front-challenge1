import React from 'react'
import './Progresso4.css'
import g5bolved1 from '../../assets/bol-1-verde.png'
import g5bolved2 from '../../assets/bol-2-verde.png'
import g5bolved3 from '../../assets/bol-3-verde.png'
import group3 from '../../assets/grupo-bol-3.png'
import { Link } from 'react-router-dom'
    

export default function Progresso4() {
  return (
    <div>
      <div className="div-group7">
        <Link to='/formPessoal'><img className='g4bolved1' src={g5bolved1} alt="" /></Link>
        <Link to='/formBike'><img className='g4bolved2' src={g5bolved2} alt="" /></Link>
        <Link to='/formAc'><img className='g4bolved3' src={g5bolved3} alt="" /></Link>
        <img className='g4group' src={group3} alt="" />
      </div>
    </div>
  )
}