import React from 'react'
import './Cardlogin.css'
import { Link } from 'react-router-dom'


export default function CardLogin() {
  return (
    <div className='body-l'>
      <div className="container-l">
        <div className="card-l">
          <h1 className='h1-l'>Entrar</h1>

          <div className="label-float-l">
            <input type="text" id='usuario-l' placeholder='Usuario'/>
          </div>

          <div className="label-float-l">
            <input type="password" id='senha-l' placeholder='Senha'/>
          </div>

          <div className="justify-center-l">
            <Link to='/tipopessoa'><button>Entrar</button></Link>
          </div>

          <div className="justify-center-l2">
            <Link to='/documentos'><button>Entrar</button></Link>
          </div>

          <div className="justify-center-l">
            <hr />
          </div>

          <p className='p'>Não tem uma conta? <a href="">Cadastre-se</a></p>
        </div>
      </div>
      
    </div>
  )
}
