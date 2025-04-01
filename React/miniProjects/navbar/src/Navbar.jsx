import React, { useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShow] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className={showLinks ? "links active" : "links inactive"}>
        {links.map((link) => {
          return (
            <a href={link.url} key={link.id}>
              {link.text}
            </a>
          );
        })}
      </div>
      <button onClick={() => setShow((prev) => !prev)} className="toggle">
        <FaBars />
      </button>
      <div className="socials">
        {social.map((item) => {
          return (
            <a href={item.url} key={item.id}>
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
