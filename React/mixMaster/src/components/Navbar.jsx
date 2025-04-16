import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/Navbar";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className={menu ? "nav-links active" : "nav-links"}>
          <NavLink to="/" className="nav-link" onClick={() => setMenu(!menu)}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            onClick={() => setMenu(!menu)}
          >
            About
          </NavLink>
          <NavLink
            to="/newsletter"
            className="nav-link"
            onClick={() => setMenu(!menu)}
          >
            Newsletter
          </NavLink>
        </div>
        <div className="menu" onClick={() => setMenu(!menu)}>
          {!menu ? <TiThMenu /> : <IoIosCloseCircle />}
        </div>
      </div>
    </Wrapper>
  );
}

// const Wrapper = styled.nav`
//   background: gray;
// `;

export default Navbar;
