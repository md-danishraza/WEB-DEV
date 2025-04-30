import React from "react";
import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid gap-16 md:grid-cols-2 items-center">
        <img src={aboutImg} alt="about" className="w-full h-96" />
        <article>
          <SectionTitle>About</SectionTitle>
          <p className="mt-8 text-slate-500 leading-loose">
            Passionate front-end developer specializing in React.js, with a
            strong foundation in building responsive and dynamic user
            interfaces. Currently pursuing a Bachelor in Vocation Studies
            (Software Development Engineering) at Delhi University. Familiarity
            with the full MERN stack, but highly focused on delivering seamless
            and scalable frontend solutions.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
