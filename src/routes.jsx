import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CardLogin from './Components/CardLogin/CardLogin';
import PageInfoInicial from './Pages/PaginasDoCliente/PageInfoInicial';
import PageTipoPessoa from './Pages/PaginaTipoPessoa/PageTipoPessoa';
import PageDadosPesssoais from './Pages/PaginasDoCliente/PageDadosPesssoais';
import PageFormPessoal from './Pages/PaginaFormPessoal/PageFormPessoal';
import PageFormBike from './Pages/PaginaFormBike/PageFormBike';
import PageFormAcessorio from './Pages/PaginaFormAcessorio/PageFormAcessorio';
import PageFtBike from './Pages/PaginaFotosBike/PageFtBike';
import PageDadosBikeAc from './Pages/PaginasDoCliente/PageDadosBikeAc';
import PageBike from './Pages/PaginasDoCliente/PageBike';
import PaginaCardSquad from './Pages/PaginaCardSquad/PaginaCardSquad';
import PageStatus from './Pages/PaginaStatus/PageStatus';
import CarroselFotos from './Components/Carroselfotos/CarroselFfotos';
import PageFotos from './Pages/PaginaFotos/PageFotos';
import PageBot from './Pages/PaginaBot/PageBot';

export default function Approutes() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CardLogin/>}></Route>
            <Route path='/tipopessoa' element={<PageTipoPessoa/>}></Route>
            <Route path='/formPessoal' element={<PageFormPessoal/>}></Route>
            <Route path='/formBike' element={<PageFormBike/>}></Route>
            <Route path='/formAc' element={<PageFormAcessorio/>}></Route>
            <Route path='/fotosBk' element={<PageFtBike/>}></Route>
            <Route path='/status' element={<PageStatus/>}></Route>
            <Route path='/documentos' element={<PageInfoInicial/>}></Route>
            <Route path='/doccliente' element={<PageDadosPesssoais/>}></Route>
            <Route path='/escolhaBike' element={<PageDadosBikeAc/>}></Route>
            <Route path='/docBike' element={<PageBike/>}></Route>
            <Route path='/squad' element={<PaginaCardSquad/>}></Route>
            <Route path='/carrosel' element={<PageFotos/>}></Route>
            <Route path='/bot' element={<PageBot/>}></Route>

          </Routes>
        </BrowserRouter>
    </div>
  )
}
