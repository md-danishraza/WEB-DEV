import React from "react";
import HeroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
function Hero() {
  return (
    <section className="py-20 bg-cyan-100">
      <div className="mx-auto max-w-7xl  px-8 md:px-20   grid  md:grid-cols-2 items-center gap-8 ">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Danish</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:flex justify-end">
          <img src={HeroImg} className="h-80 lg:h-96 " />
        </article>
      </div>
    </section>
  );
}

export default Hero;
