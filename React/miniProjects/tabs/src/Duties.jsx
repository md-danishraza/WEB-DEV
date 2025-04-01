import React from "react";
import { v4 as uuidv4 } from "uuid";
function Duties({ duties }) {
  return (
    <div className="duties">
      {duties.map((duty) => {
        return (
          <div className="duty" key={uuidv4()}>
            <i className="ri-arrow-right-fill"></i>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Duties;
