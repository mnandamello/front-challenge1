import React from 'react'
import './Header.css'
import ftLogo from '../../assets/logoPorto.svg'

export default function Header() {
  return (
    <div className='header'>
      <div className='cont-logo'>
        <img className='logo' src={ftLogo} alt="" />
      </div>
    </div>
  )
}
