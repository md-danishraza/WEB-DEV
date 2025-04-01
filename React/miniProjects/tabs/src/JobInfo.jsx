import React from "react";
import Duties from "./Duties";
function JobInfo({ current }) {
  return (
    <div className="jobInfo">
      <h1>{current.title}</h1>
      <span>{current.company}</span>
      <p className="date">{current.dates}</p>
      <Duties duties={current.duties} />
    </div>
  );
}

export default JobInfo;
