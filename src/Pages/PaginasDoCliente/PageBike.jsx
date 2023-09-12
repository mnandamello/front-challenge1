import React from 'react'
import HeaderInfos from '../../Components/HeaderInfos/HeaderInfos'
import EscolhaBike from '../../Components/EscolhaBike/EscolhaBike'
import NavBar from '../../Components/NavBar/NavBar'
import DocBikes from '../../Components/DocBikes/DocBikes'

export default function PageBike() {
  return (
    <div>
      <HeaderInfos/>
      <DocBikes/>
      <NavBar/>
    </div>
  )
}
