import React from "react";
import useFetchProjects from "./useFetchProjects";
import Item from "./Item";

function Project() {
  const { loading, projects } = useFetchProjects();
  return (
    <div className="project-section" id="projects">
      <h1>PROJECTS</h1>
      <p>Resourced using CMS</p>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="projects">
          {projects.map((project, i) => {
            return <Item key={i} project={project.fields} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Project;
