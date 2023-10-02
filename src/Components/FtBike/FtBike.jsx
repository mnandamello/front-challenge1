import React from 'react'
import './FtBike.css'
import bikeEsquerda from '../../assets/exemplo1T.png'
import bikeDireita from '../../assets/exemplo2T.png'
import bikeFrente from '../../assets/exemplo3T.png'
import bikeTras from '../../assets/exemplo4T.png'
import bikeChassi from '../../assets/exemplo5T.png'
import Button from '../Button/Button'
import Progresso4 from '../Progresso/Progresso4'
import { Link } from 'react-router-dom'
import { api } from '../../api/api'


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
                                <h3 className='titulos-Ft'>Foto da bicicleta de lado esquerdo:</h3>
                                <div className="bk-esquerda">
                                    <img className="bk-ft-esquerda" src={bikeEsquerda} alt=""/>
                                </div>
                                <div className="form-ft-bk">
                                    <input type="file" name="picture" accept="image/*" capture="user" placeholder='Tirar Foto' />
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className="ft-bike-direita">
                                <h3 className='titulos-Ft'>Foto da bicicleta de lado esquerdo:</h3>
                                <div className="bk-direita">
                                    <img className="bk-ft-direita" src={bikeDireita} alt=""/>
                                </div>
                                <div className="form-ft-bk">
                                    <input type="file" name="picture" accept="image/*" capture="user" />
                                </div>
                            </div>
                    </div>

                    <div className="foto-bike">
                        <div className="ft-bike-esquerda">
                            <h3 className='titulos-Ft'>Foto da bicicleta de frente:</h3>
                            <div className="bk-esquerda">
                                <img className="bk-ft-frente" src={bikeFrente} alt=""/>
                            </div>
                            <div className="form-ft-bk">
                                <input type="file" name="picture" accept="image/*" capture="user" />
                            </div>
                        </div>
                        <div className="ft-bike-direita">
                            <h3 className='titulos-Ft'>Foto da bicicleta de trás:</h3>
                            <div className="bk-direita">
                                <img className="bk-ft-tras" src={bikeTras} alt=""/>
                            </div>
                            <div className="form-ft-bk">
                                <input type="file" name="picture" accept="image/*" capture="user" />
                            </div>
                        </div>
                    </div>

                    <div className="foto-bike-final">
                        <div className="ft-bike-esquerda">
                            <h3 className='titulos-Ft'>Foto do número de chassi:</h3>
                            <div className="bk-esquerda">
                                <img className="bk-ft-chassi" src={bikeChassi} alt=""/>
                            </div>
                            <div className="form-ft-bk">
                                <input type="file" name="picture" accept="image/*" capture="user" />
                            </div>
                        </div>
                        <div className="ft-bike-direita">
                            <h3 className='titulos-Ft'>Foto do rosto com a bike ao fundo:</h3>
                            <div className="form-ft-bk">
                                <input type="file" name="picture" accept="image/*" capture="user" />
                            </div>
                        </div>
                            
                        <div className="botao-foto">
                            <Link to='/status'><Button/></Link>
                        </div>
                    </div>

            </div>
        </div>
    </>
  )
}
