import React from 'react'
import './FtBike.css'
import fundo from '../../assets/fundoFtBike.jpg'
import Button from '../Button/Button'
import Progresso4 from '../Progresso/Progresso4'
import { Link } from 'react-router-dom'


/*async function bikeDetect(){
    const ressponse = await api.post(``)
}*/

export default function FtBike() {
  return (
    <>
        <div className='container-cliente'>
            <div className="conteudo-ft">
            <div className="div-prog3">
                    <Progresso4/>
                </div>
                    <div className="foto-bike">
                            <div className="ft-bike-esquerda2">
                                <h3 className='titulos-Ft'>FOTO DA BICILETA:</h3>
                                <div className="bk-esquerda">
                                    <img className="bk-ft-esquerda" src={fundo} alt=""/>
                                </div>
                                <div className="form-ft-bk">
                                    <input type="file" name="picture" accept="image/*" capture="user" placeholder='Tirar Foto' />
                                    <button className='btn2'>Enviar</button>
                                </div>
                            </div>
                    </div>

                    <div className="foto-bike-final">
                            
                        <div className="botao-foto">
                            <Link to='/status'><Button/></Link>
                        </div>
                    </div>

            </div>
        </div>
    </>
  )
}
