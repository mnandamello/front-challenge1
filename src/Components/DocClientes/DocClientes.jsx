import React from 'react'
import './DocClientes.css'
import { Link } from 'react-router-dom'

export default function DocClientes() {
  return (
    <div>
      <div className="container-cliente-info">
        <div className="opcao-perfil">
            <div className="perfil">
                <div className="caixa-rotulos">
                    <Link to='/doccliente'><h3 className="rotulos">Proprietario</h3></Link>
                </div>
            </div>
            <div className="bicicleta">
                <div className="caixa-rotulos">
                    <Link to='/escolhaBike'><h3 className="rotulos">Bicicletas</h3></Link>
                </div>
            </div>

            <div className="volta-processo">
                <div className="caixa-rotulos3">
                    <Link to='/tipopessoa'><h3 className="rotulos">Processo</h3></Link>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
