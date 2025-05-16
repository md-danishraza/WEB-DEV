import React, { useEffect } from "react";
import useFetchProjects from "./useFetchProjects";
import Item from "./Item";
import { useState } from "react";
import useScrollReveal from "./utils/useScrollReveal";

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
    const targetCount = visibleCount + 6;
    const increment = 1;
    const interval = 200;

    let count = visibleCount;

    const increase = () => {
      if (count < targetCount) {
        count += increment;
        setVisibleCount(count);
        setTimeout(increase, interval);
      }
    };

    increase();
  };

  const handleCollapse = () => {
    const targetCount = 6;
    const decrement = 1;
    const interval = 200;

    let count = visibleCount;

    const collapse = () => {
      if (count > targetCount) {
        count -= decrement;
        setVisibleCount(count);
        setTimeout(collapse, interval);
      }
    };

    collapse();
  };

  useScrollReveal("#projects > h1", { origin: "top", delay: 200 });
  useScrollReveal("#projects > p", { origin: "top", delay: 300 });
  useScrollReveal("#projects .menus button", {
    origin: "bottom",
    interval: 150,
  });

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
          {projects
            .filter((project) => {
              const currentStack = menu.find((item) => item.status)?.stack;
              if (currentStack === "All") {
                return true; // Show all projects
              }
              return project.fields.stack === currentStack; // Filtering by stack
            })
            .slice(0, visibleCount) // Slicing the filtered list for pagination
            .map((project, i) => (
              <Item key={i} project={project.fields} />
            ))}
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
