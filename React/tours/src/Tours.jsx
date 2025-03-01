import React from "react";
import Tour from "./Tour";

function Tours({ tours, remove }) {
  return (
    <>
      {tours.map((tour) => (
        <Tour tour={tour} remove={remove} key={tour.id} />
      ))}
    </>
  );
}

export default Tours;
