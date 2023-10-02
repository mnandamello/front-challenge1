import React from 'react'
import './DocClientes.css'
import { Link } from 'react-router-dom'

export default function DocClientes() {
  return (
    <div>
      <div className="container-cliente-info">
        <div className="opcao-perfil">
            <Link to='/doccliente'>
              <div className="perfil">
                  <div className="caixa-rotulos">
                      <h3 className="rotulos">Proprietario</h3>
                  </div>
              </div>
            </Link>
            <Link to='/escolhaBike'>
              <div className="bicicleta">
                  <div className="caixa-rotulos">
                    <h3 className="rotulos">Bicicletas</h3>
                  </div>
              </div>
            </Link>
            <Link to='/tipopessoa'>
              <div className="volta-processo">
                  <div className="caixa-rotulos3">
                        <h3 className="rotulos-2">Novo Seguro</h3>
                  </div>
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}
