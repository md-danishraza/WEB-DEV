import React from "react";

function Item({ project }) {
  return (
    <div className="project">
      <img
        src={project.image.fields.file.url}
        alt={project.image.fields.title}
      />
      <h2 className="title">{project.title}</h2>

      <div className="info">
        <a href={project.url} target="_blank">
          Live
        </a>
        <a href={project?.code} target="_blank">
          code
        </a>
      </div>
    </div>
  );
}

export default Item;
