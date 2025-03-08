import React from "react";
import { useMyContext } from "./globalContext";
import { links } from "./data";

import { ImCross } from "react-icons/im";
function SideBar() {
  const { isSidebarOpen, toggleSidebar } = useMyContext();

  return (
    <div className={isSidebarOpen ? "sidebar active" : "sidebar"}>
      {links.map((i) => {
        return (
          <div className="link" key={i.id}>
            {i.icon}
            <p>{i.text}</p>
            <div className="close">
              <ImCross onClick={toggleSidebar} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
