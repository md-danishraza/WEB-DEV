import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>contact</h1>
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
        </div>
        <div className="form" id="form">
          <form action="">
            <h1>Let's talk.</h1>
            <p>New project, freelance.</p>

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
              <input type="text" name="message" id="message" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
