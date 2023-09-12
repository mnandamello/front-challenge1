import React from 'react'
import './Progresso5.css'
import g5bolved1 from '../../assets/bol-1-verde.png'
import g5bolved2 from '../../assets/bol-2-verde.png'
import g5bolved3 from '../../assets/bol-3-verde.png'
import g5bolved4 from '../../assets/bol-4-verde.png'
import g5bolved5 from '../../assets/bol-5-verde.png'
import { Link } from 'react-router-dom'


export default function Progresso5() {
  return (
    <div>
      <div className="div-group5">
        <Link to='/formPessoal'><img className='g5bolved1' src={g5bolved1} alt="" /></Link>
        <Link to='/formBike'><img className='g5bolved2' src={g5bolved2} alt="" /></Link>
        <Link to='/formAc'><img className='g5bolved3' src={g5bolved3} alt="" /></Link>
        <Link to='/fotosBk'><img className='g5bolved4' src={g5bolved4} alt="" /></Link>
        <img className='g5bolved5' src={g5bolved5} alt="" />
      </div>
    </div>
  )
}