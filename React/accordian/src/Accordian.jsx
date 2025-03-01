import React from "react";

function Accordian({ data, update }) {
  const toggle = data.show;

  return (
    <div className={`accordian ${toggle ? "expanded" : ""}`}>
      <h1>{data.title}</h1>
      {toggle ? <p>{data.info}</p> : ""}
      <span
        onClick={() => update(data.id)}
        className={toggle ? "icon active" : "icon"}
      >
        {toggle ? (
          <i className="ri-toggle-fill"></i>
        ) : (
          <i className="ri-toggle-line"></i>
        )}
      </span>
    </div>
  );
}

export default Accordian;
