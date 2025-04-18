import React from "react";
import useFetchProjects from "./useFetchProjects";
import Item from "./Item";
import { useState } from "react";

function Project() {
  const { loading, projects } = useFetchProjects();

  const [visibleCount, setVisibleCount] = useState(6);

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
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="projects">
          {projects.slice(0, visibleCount).map((project, i) => (
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
