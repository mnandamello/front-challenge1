import React from 'react'
import './Cardlogin.css'
import { Link } from 'react-router-dom'
import fundopc from '../../assets/fundoPc.png'



export default function CardLogin() {
  
  return (
  <>
  
    <div className='body-l'>
      <div className="container-l">
        <div className="card-l">
          <h1 className='h1-l'>Entrar</h1>

          <div className="label-float-l">
            <input type="text" id='usuario-l' placeholder='fiap@gmail.com'/>
          </div>

          <div className="label-float-l">
            <input type="password" id='senha-l' placeholder='1234'/>
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

    <div class="fundo_comp">
      <div class="img-tela-pc">
        <div className="fundo-img-pc">
        <img class="tela-pc" src={fundopc} alt=""/>
          <div class="texto-pc">
                <p class="p-pc">
                    Bem-vindo(a) ao nosso sistema do processo de Vistoria da Sua Bicicleta! 
                    Algumas etapas do processo exigem que a câmera seja utilizada, sem a chance de realizar uploads, por esse motivo tenha o celular pronto para realizar as etapas de vistoria da sua bike. <br/>Agradecemos a compreensão e estamos à disposição para ajudar!
                </p>
            </div>
        </div>
        
        
      </div>
    </div>
  </>
  )
}
