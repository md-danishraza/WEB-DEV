import React from "react";
import HeroImg from "./assets/hero.svg";
import profile from "./assets/profile.jpg";
function Hero() {
  return (
    <div className="hero">
      <div className="info">
        <h1>
          Hi,
          <br />
          I'm <span>Md. Danish Raza</span>
          <br />
          Full Stack Developer
        </h1>
        <p>
          Welcome to my portfolio. <br />
          B.Voc. SDE at Ramanujan College, DU. <br />
          Tenacity to learn anything.
          <br />
          MERN.
        </p>
      </div>

      <div className="img">
        <div className="clipped">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
