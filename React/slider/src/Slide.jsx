import React from "react";

function Slide({ person, className }) {
  return (
    <div className={`slide ${className}`}>
      <img src={person.image} alt={person.name} />
      <h4>{person.name}</h4>
      <h5>{person.title}</h5>
      <p>{person.quote}</p>
    </div>
  );
}

export default Slide;
