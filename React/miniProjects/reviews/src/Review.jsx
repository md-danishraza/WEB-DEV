import React from "react";

function Review({ review, updators }) {
  return (
    <div className="content">
      <img src={review.image} alt="" />
      <h3>{review.name}</h3>
      <h5>{review.job}</h5>
      <p>{review.text}</p>
      <div className="arrows">
        <i className="fa-solid fa-arrow-left" onClick={updators.previous}></i>
        <i className="fa-solid fa-arrow-right" onClick={updators.next}></i>
      </div>
      <button className="btn" onClick={updators.random}>
        Random
      </button>
    </div>
  );
}

export default Review;
