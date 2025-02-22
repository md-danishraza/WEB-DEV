import React from "react";
import BrandLogo from "../images/logo.svg";

import {pageLinks,socialLinks} from "./data.js";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink.jsx";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={BrandLogo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {
            pageLinks.map((link) => (
              <li key={link.id}>
                <PageLink  link={link} />
              </li>
            ))
          }
        </ul>

        <ul className="nav-icons">
          {
            socialLinks.map((link) => (
                <li key={link.id}>
                  <SocialLink  link={link} />
                </li>
            ))
          }
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
