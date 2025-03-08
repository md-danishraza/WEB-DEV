import React from "react";
import sublinks from "./data";
import { useAppContext } from "./context";
import { FaTimes } from "react-icons/fa";
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { links, pageId, page } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
