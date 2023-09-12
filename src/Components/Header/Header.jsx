import React from 'react'
import './Header.css'
import ftLogo from '../../assets/logoPorto.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <div className='cont-logo'>
        <Link to="https://www.portoseguro.com.br/conteudo/seguros/bike/"><img className='logo' src={ftLogo} alt="" /></Link>
      </div>
    </div>
  )
}
