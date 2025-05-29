import React from "react";
import { useState, useEffect } from "react";

function Item({ project }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Triggering the visibility state after the component mounts
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <div className={`project ${isVisible ? "show" : "hide"}`}>
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
