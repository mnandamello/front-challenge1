import React from 'react'
import DocClientes from '../../Components/DocClientes/DocClientes'
import HeaderInfos from '../../Components/HeaderInfos/HeaderInfos'
import NavBar from '../../Components/NavBar/NavBar'


export default function PageInfoInicial() {
  return (
    <div>
      <HeaderInfos/>
      <DocClientes/>
      <NavBar/>
    </div>
  )
}
