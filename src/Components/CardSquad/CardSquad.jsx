import React from 'react'
import'./CardSquad.css'
import insta from '../../assets/instagram-logo.svg'
import linkedin from '../../assets/linkedin-logo.svg'
import git from '../../assets/github-logo.svg'


export default function CardSquad(props) {

  return (
    <>
     <div className="Body-card-squad">
        <div className="cardSquad">
          <div className="profile-image">
            <div className=".img-squad"> <img className='pf-ft'  src={props.imgSrc} alt="" /></div>
          </div>  
          <div className="title-squad">{props.name}</div>
          <div className="rm-squad">Rm: {props.rm}</div>
          <div className="about">{props.role}</div>
          <div className="social-icons">
            <a href={props.social.instagram}><img className="fab" src={insta} alt=""/></a>
            <a href={props.social.github}><img className="fab" src={git} alt=""/></a>
            <a href={props.social.linkedin}><img className="fab" src={linkedin  } alt=""/></a>
          </div> 
          <button className="contac-me">Contate-me</button>
        </div>

        </div>

    </>
  )
}

