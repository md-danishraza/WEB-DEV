import React from "react";
import sublinks from "./data";
import { useAppContext } from "./context";
function Submenu() {
  const { pageId } = useAppContext();
  const currentPage = sublinks.find((item) => item.pageId == pageId);
  console.log(currentPage);
  return (
    <div className={currentPage ? "submenu show" : "submenu"}>
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          marginTop: "1rem",
          display: "grid",
          rowGap: ".5rem",
          gridTemplateColumns:
            currentPage?.links.length >= 2 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links.map((link) => {
          const { id, url, icon, label } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
