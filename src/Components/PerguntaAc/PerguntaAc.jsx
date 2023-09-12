import React from 'react'
import Header from '../Header/Header'
import './PerguntaAc.css'
import Button from '../Button/Button'

export default function PerguntaAc() {
  return (
    <div>
      <div className="div-header-ac">
        <Header/>
      </div>
      <div className="container-escolha-acessorio">
        <div className="div-card-ac">
          <div className="imagem-escolha-ac">
            <div className="div-conteudo-ac">
              <form>
                <div className="titulos-escolha-ac">
                  <legend>Possui acessório?</legend>
                </div>
                <div className="custom">
                  <div className="bolinhas-escolha-ac">
                    <input type="radio" className='radio-ac' id='sim'  />
                  </div>
                </div>
                <div className="div-btn-escolha">
                  <Button/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
