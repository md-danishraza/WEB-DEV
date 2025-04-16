import React from "react";
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

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>CONTACT</h1>
      <div className="content">
        <div className="about" id="about">
          <h1>About Me.</h1>
          <p>Full Stack Developer</p>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            tenetur a explicabo ipsum quaerat impedit blanditiis animi ea,
            inventore minima repellendus, id ratione iusto in hic magnam
            mollitia nam totam.
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
        <div className="form" id="form">
          <form action="">
            <h1>Let's talk.</h1>
            <p>New project, freelance.</p>

            <div className="inputs">
              <fieldset>
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" required />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" required />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message *</label>
                <textarea name="message" id="message" rows={3}></textarea>
              </fieldset>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
