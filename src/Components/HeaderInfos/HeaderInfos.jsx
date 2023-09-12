import React from 'react'
import logo from '../../assets/logoPorto2.svg'
import './HeaderInfos.css'

export default function HeaderInfos() {
  return (
    <div>
      <div className="header-info">
        <div className="img-header">
          <a href=""><img className='logo-porto2' src={logo} alt="" /></a>
        </div>
      </div>
    </div>
  )
}
