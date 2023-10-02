import React from "react";
import "./PaginaCardSquad.css";
import Slider from "react-slick";
import CardSquad from "../../Components/CardSquad/CardSquad";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../../Components/NavBar/NavBar";
import HeaderInfos from "../../Components/HeaderInfos/HeaderInfos";

export default function PaginaCardSquad() {

  const participants = [
    {
      name: "Gabrielle da Silva Stanguini",
      rm: "98818",
      role: "Desenvolvedora",
      imgSrc: "https://avatars.githubusercontent.com/u/125506327?v=4",
      social: {
        instagram: "https://www.instagram.com/gabi_stanguini/",
        github: "https://github.com/gabi1482",
        linkedin: "https://www.linkedin.com/in/gabrielle-da-silva-stanguini-41b202265/",
      },
    },

    {
      name: "Lucca Freitas",
      rm: "98819",
      role: "Desenvolvedor",
      imgSrc: "https://avatars.githubusercontent.com/u/126486303?v=4",
      social: {
        instagram: "https://www.instagram.com/luc.freitass/",
        github: "https://github.com/lucfreitass",
        linkedin: "https://www.linkedin.com/in/seu_linkedin_1",
      },
    },

    {
      name: "Maria Fernanda Ribeiro Mello",
      rm: "98818",
      role: "Desenvolvedora",
      imgSrc: "https://avatars.githubusercontent.com/u/106833193?v=4",
      social: {
        instagram: "https://www.instagram.com/mnandamello/",
        github: "https://github.com/mnandamello",
        linkedin: "https://www.linkedin.com/in/maria-fernanda-b31526243/",
      },
    },

    {
      name: "Nicolas Reis",
      rm: "98819",
      role: "Desenvolvedor",
      imgSrc: "https://avatars.githubusercontent.com/u/106833483?v=4",
      social: {
        instagram: "https://www.instagram.com/nicolasrreis/",
        github: "https://github.com/Nreis280",
        linkedin: "https://www.linkedin.com/in/nicolas-reis-441167248/",
      },
    },

    {
      name: "Renan Vieira",
      rm: "98819",
      role: "Desenvolvedor",
      imgSrc:
        "https://avatars.githubusercontent.com/u/126690468?v=4",
      social: {
        instagram: "https://www.instagram.com/rvd_jesus/",
        github: "https://github.com/Renanvj",
        linkedin: "https://www.linkedin.com/in/renan-vieira-je/",
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
      <HeaderInfos/>
      <div className="propsCards">
        <Slider {...settings}>
          {participants.map((member, index) => (
            <CardSquad key={index} {...member} />
          ))}
        </Slider>
      </div>
      <NavBar />
    </>
  );
}
