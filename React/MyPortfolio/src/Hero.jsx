import React from "react";
import HeroImg from "./assets/hero.svg";
import profile from "./assets/profile2.jpg";
import useScrollReveal from "./utils/useScrollReveal";
function Hero() {
  useScrollReveal(".hero .info", { origin: "left", delay: 200 });
  useScrollReveal(".hero .img", { origin: "right", delay: 200 });
  return (
    <div className="hero">
      <div className="info">
        <h1>
          Hi,
          <br />
          I'm <span>Md. Danish Raza</span>
          <br />
          Software Developer
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
