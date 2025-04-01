import React from "react";
import "./Tour.css";
import { useState } from "react";

function Tour({ tour, remove }) {
  const [expand, setExpand] = useState(false);
  const [readOption, setReadOption] = useState("Read More");
  const update = () => {
    !expand ? setReadOption("Read Less") : setReadOption("Read More");
    setExpand(!expand);
  };
  return (
    <div className="card">
      <img src={tour.image} alt="" />
      <span className="price">${tour.price}</span>
      <div className="content">
        <h4>{tour.name}</h4>
        <p>
          {expand ? tour.info : tour.info.substring(0, 150) + "..."}
          <span className="expand" onClick={update}>
            {readOption}
          </span>
        </p>
        <button className="btn" onClick={() => remove(tour.id)}>
          Not interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
