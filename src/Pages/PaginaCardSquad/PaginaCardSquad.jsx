import React from 'react'
import './PaginaCardSquad.css'
import Slider from 'react-slick';
import CardSquad from '../../Components/CardSquad/CardSquad';
import Progresso from '../../Components/Progresso/Progresso';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from '../../Components/NavBar/NavBar';
import imgmaria from '../../assets/img-maria.jpeg';

export default function PaginaCardSquad() /* {

  return (
    <>
        <div className="cont-card-squad"> 
            <h2>Cards Squad</h2>
            <div className='card-squad-list'>
            <CardSquad/>
            <CardSquad/>
            <CardSquad/>
            <CardSquad/>
            <CardSquad/>
            </div>
        </div>
    </>
  )
} */
{
  const participants = [

    {
      name: "Gabrielli",
      rm: "98818",
      role: "Desenvolvedora",
      imgSrc: 'https://avatars.githubusercontent.com/u/125506327?v=4',
      social: {
        instagram: "https://www.instagram.com/seu_instagram_2",
        github: "https://github.com/seu_github_2",
        linkedin: "https://www.linkedin.com/in/seu_linkedin_2",
      },
    },



    {
      name: "Lucca Freitas",
      rm: "98819",
      role: "Desenvolvedor",
      imgSrc: "https://avatars.githubusercontent.com/u/126486303?v=4", 
      social: {
        instagram: "https://www.instagram.com/seu_instagram_1",
        github: "https://github.com/seu_github_1",
        linkedin: "https://www.linkedin.com/in/seu_linkedin_1",
      },
    },

    {
      name: "Maria Fernanda Ribeiro Mello",
      rm: "98818",
      role: "Desenvolvedora",
      imgSrc: 'https://avatars.githubusercontent.com/u/106833193?v=4',
      social: {
        instagram: "https://www.instagram.com/seu_instagram_2",
        github: "https://github.com/seu_github_2",
        linkedin: "https://www.linkedin.com/in/seu_linkedin_2",
      },
    },

    {
      name: "Nicolas Reis",
      rm: "98819",
      role: "Desenvolvedor",
      imgSrc: "https://avatars.githubusercontent.com/u/106833483?v=4", 
      social: {
        instagram: "https://www.instagram.com/seu_instagram_1",
        github: "https://github.com/seu_github_1",
        linkedin: "https://www.linkedin.com/in/seu_linkedin_1",
      },
    },

    {
      name: "Renan Vieira",
      rm: "98819",
      role: "Desenvolvedor",
      imgSrc: "https://www.instagram.com/p/Cf171GRONyj/?igshid=MzRlODBiNWFlZA==", 
      social: {
        instagram: "https://www.instagram.com/seu_instagram_1",
        github: "https://github.com/seu_github_1",
        linkedin: "https://www.linkedin.com/in/seu_linkedin_1",
      },
    },




 


  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Número de slides visíveis por vez
    slidesToScroll: 1,
  };

 /*  const settingsPc = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Número de slides visíveis por vez
    slidesToScroll: 0,
  }; */

  
  return (
    <>

        <div className="propsCards">
              <Slider {...settings}>
                {participants .map((member, index) => (
                  <CardSquad key={index} {...member} />
                ))}
              </Slider>
        </div>
        <NavBar/>

      
    </>
  )
}


