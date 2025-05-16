import React, { useState } from "react";
import js from "./assets/logos/js.png";

import mongo from "./assets/logos/mongo.png";
import express from "./assets/logos/express.png";
import react from "./assets/logos/react.png";
import node from "./assets/logos/node.png";

import python from "./assets/logos/python.png";
import git from "./assets/logos/git.png";
import java from "./assets/logos/java.png";
import postgres from "./assets/logos/postgres.png";

import docker from "./assets/logos/docker.png";
import kubernetes from "./assets/logos/kubernetes.png";
import aws from "./assets/logos/aws.png";

import { toast } from "react-toastify";
import useScrollReveal from "./utils/useScrollReveal";

function Contact() {
  const [inputs, setInuputs] = useState({ name: "", email: "", message: "" });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInuputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = import.meta.env.VITE_FORM + "/send-email";

    try {
      console.log(url);
      toast.success("feature coming soon", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }

    setInuputs(() => {
      return { name: "", email: "", message: "" };
    });
  };

  useScrollReveal("#contactHeading", { origin: "top", delay: 200 });
  useScrollReveal(".content .about", { origin: "left", delay: 200 });
  useScrollReveal(".content .about h1", { origin: "top", delay: 1000 });
  useScrollReveal(".content .about p", { origin: "top", delay: 1200 });
  useScrollReveal(".content .about h2", { origin: "top", delay: 1400 });
  useScrollReveal(".content .form", { origin: "right", delay: 300 });
  useScrollReveal(".content .form h1", { origin: "right", delay: 1000 });
  useScrollReveal(".content .form p", { origin: "right", delay: 1200 });
  useScrollReveal(".skills .img img", { origin: "bottom", interval: 150 });

  return (
    <div className="contact" id="contact">
      <h1 id="contactHeading">CONTACT</h1>
      <div className="content">
        <div className="about" id="about">
          <h1>About Me.</h1>
          <p>Full Stack Developer</p>
          <h2>
            Ambitious full-stack MERN developer with a solid background in web
            development, data analysis, and backend systems. Currently studying
            for a Bachelor in Vocation Studies SDE at DU. Keen to be part of
            energetic development teams while constantly developing scalable web
            applications and user-focused solutions.
          </h2>
          <div className="skills">
            <div className="img">
              <img src={js} alt="" />
            </div>
            <div className="img">
              <img src={mongo} alt="" />
            </div>
            <div className="img">
              <img src={express} alt="" />
            </div>

            <div className="img">
              <img src={react} alt="" />
            </div>

            <div className="img">
              <img src={node} alt="" />
            </div>

            <div className="img">
              <img src={python} alt="" />
            </div>
            <div className="img">
              <img src={java} alt="" />
            </div>
            <div className="img">
              <img src={postgres} alt="" />
            </div>
            <div className="img">
              <img src={git} alt="" />
            </div>
            <div className="img">
              <img src={docker} alt="" />
            </div>
            <div className="img">
              <img src={kubernetes} alt="" />
            </div>
            <div className="img">
              <img src={aws} alt="" />
            </div>
          </div>
        </div>
        <div className="form" id="form" onSubmit={handleSubmit}>
          <form action="">
            <h1>Let's talk.</h1>
            <p>New project, freelance.</p>

            <div className="inputs">
              <fieldset>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={inputs.name}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={inputs.email}
                  onChange={handleChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={inputs.message}
                  onChange={handleChange}
                ></textarea>
              </fieldset>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
