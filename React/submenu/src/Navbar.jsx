import React from "react";
import { useAppContext } from "./context";
import { FaBars } from "react-icons/fa";
import Navlinks from "./Navlinks";
import Submenu from "./Submenu";

function Navbar() {
  const { openSidebar, setPageId } = useAppContext();
  const handleShow = (e) => {
    console.log(e.target.classList);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseEnter={handleShow}>
      <div className="nav-center">
        <h3 className="logo">Logo</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>

        <Navlinks />
        <Submenu />
      </div>
    </nav>
  );
}

export default Navbar;
