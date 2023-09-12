import React from 'react'
import './Progresso.css'

export default function Progresso(index, active) {
  return (
    <div>
      <div className="bolinhas-progreesso">
        <div className="div1">
        </div>
        {index}
      </div>
    </div>
  )
}
