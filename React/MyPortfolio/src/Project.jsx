import React, { useEffect } from "react";
import useFetchProjects from "./useFetchProjects";
import Item from "./Item";
import { useState } from "react";

function Project() {
  const { loading, projects } = useFetchProjects();

  const [visibleCount, setVisibleCount] = useState(6);

  const menus = [
    { stack: "All", status: false },
    { stack: "Vanilla", status: false },
    { stack: "CssLib", status: false },
    { stack: "React", status: false },
    { stack: "Next", status: false },
    { stack: "FullStack", status: false },
  ];
  const [menu, setMenu] = useState(menus);

  useEffect(() => {
    setMenu((prev) => {
      const copy = [...prev];
      copy[0].status = true;
      return copy;
    });
  }, []);

  const handleMenu = (menu) => {
    setMenu(
      menus.map((item) => {
        if (item.stack == menu.stack) {
          return { ...item, status: true };
        } else {
          return item;
        }
      })
    );
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Load 6 more projects
  };

  const handleCollapse = () => {
    setVisibleCount(6); // Reset to initial count
  };
  return (
    <div className="project-section" id="projects">
      <h1>PROJECTS</h1>
      <p>Resourced using CMS</p>
      <div className="menus">
        {menu.map((menu, i) => {
          return (
            <button
              key={i}
              onClick={() => handleMenu(menu)}
              className={menu?.status ? "active" : undefined}
            >
              {menu.stack}
            </button>
          );
        })}
      </div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="projects">
          {projects.slice(0, visibleCount).map((project, i) => {
            const currentStack = menu.filter((item) => item.status == true)[0]
              .stack;
            // console.log(currentStack);
            if (currentStack == "All") {
              return <Item key={i} project={project.fields} />;
            } else {
              return (
                currentStack == project.fields.stack && (
                  <Item key={i} project={project.fields} />
                )
              );
            }
          })}
        </div>
      )}
      {!loading && (
        <div className="pagination-buttons">
          {visibleCount < projects.length && (
            <button onClick={handleLoadMore} className="load-more">
              Load More
            </button>
          )}
          {visibleCount >= projects.length && projects.length > 6 && (
            <button onClick={handleCollapse} className="collapse">
              Collapse
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Project;
