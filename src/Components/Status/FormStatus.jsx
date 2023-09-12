import React from 'react'
import './FormStatus.css'
import aprovado from '../../assets/aprovado.png'
import negado from '../../assets/negado.png'
import Progresso5 from '../Progresso/Progresso5';

export default function FormStatus() {
  return (
    
    <>
        <div className="cont-status">
            <div className="div-container-geral">
                <div className="div-prog2">
                    <Progresso5/>
                </div>
                <div className="status">
                    <div className="texto-status">
                        <div className="img-chek">
                            <img className="chek" src={aprovado} alt=""/>
                        </div>
                        <div className="chek-texto">
                            <p className='texto-confimacao'>
                                Prezado(a) [Nome],<br/><br/>

                                É com satisfação que informamos que o processo de vistoria foi concluído com sucesso.<br/> 
                                Seus dados foram devidamente registrados e verificados, garantindo a conclusão bem-sucedida da vistoria. Caso tenha alguma dúvida ou necessite de mais informações,<br/> estamos à disposição para ajudar. Agradecemos pela colaboração e pelo comprometimento durante todo o processo.<br/><br/>
            
                                Atenciosamente, Equipe Porto Seguro
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>

  )
}
