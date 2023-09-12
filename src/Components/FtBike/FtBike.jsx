import React from 'react'
import './FtBike.css'
import bikeEsquerda from '../../assets/exemplo1.png'
import bikeDireita from '../../assets/exemplo2.png'
import bikeFrente from '../../assets/exemplo3.png'
import bikeTras from '../../assets/exemplo4.png'
import bikeChassi from '../../assets/exemplo5.png'
import fundoBg from '../../assets/bgFormsPessoal.png'

export default function FtBike() {
  return (
    <>
        <div className='container-cliente'>
            <div className="conteudo-ft">
                    <div className="foto-bike">
                            <div className="ft-bike-esquerda">
                                <h3>Foto da bicicleta de lado esquerdo:</h3>
                                <div className="bk-esquerda">
                                    <img className="bk-ft-esquerda" src={bikeEsquerda} alt=""/>
                                </div>
                                <div className="form-ft-bk">
                                    <input type="file" name="picture" accept="image/*" capture="user" />
                                </div>
                            </div>
                            <div className="ft-bike-direita">
                                <h3>Foto da bicicleta de lado esquerdo:</h3>
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
                            <h3>Foto da bicicleta de frente:</h3>
                            <div className="bk-esquerda">
                                <img className="bk-ft-frente" src={bikeFrente} alt=""/>
                            </div>
                            <div className="form-ft-bk">
                                <input type="file" name="picture" accept="image/*" capture="user" />
                            </div>
                        </div>
                        <div className="ft-bike-direita">
                            <h3>Foto da bicicleta de trás:</h3>
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
                            <h3>Foto do número de chassi:</h3>
                            <div className="bk-esquerda">
                                <img className="bk-ft-chassi" src={bikeChassi} alt=""/>
                            </div>
                            <div className="form-ft-bk">
                                <input type="file" name="picture" accept="image/*" capture="user" />
                            </div>
                        </div>
                        <div className="ft-bike-direita">
                            <h3>Foto do rosto com a bike ao fundo:</h3>
                            <div className="form-ft-bk">
                                <input type="file" name="picture" accept="image/*" capture="user" />
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    </>
  )
}
