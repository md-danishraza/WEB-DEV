import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Theme from "../theme";
function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <a
          href="https://github.com/md-danishraza"
          title="github"
          target="_blank"
        >
          <FaGithubSquare className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/md-danish-raza-2039b5276/"
          title="linkedin"
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.instagram.com/renderstic/"
          title="instagram"
          target="_blank"
        >
          <FaInstagramSquare className="icon" />
        </a>
      </div>
      <Theme />
    </div>
  );
}

export default Navbar;
