import React from "react";
import { shortList, list, longList } from "./data";
import { useState, useEffect } from "react";
import Slide from "./Slide";
function Carousel() {
  const [people, setPeople] = useState(longList);
  const [current, setCurrent] = useState({ index: 0, slide: "" });
  const max = longList.length - 1;

  const prev = () => {
    const newIndex = current.index === 0 ? max : current.index - 1;
    setCurrent({ index: newIndex, slide: "prev-slide" });
  };

  const next = () => {
    const newIndex = current.index === max ? 0 : current.index + 1;
    setCurrent({ index: newIndex, slide: "next-slide" });
  };

  return (
    <div className="container">
      {people.map((person, index) => {
        let position = "next-slide"; // Default slide position
        if (index === current.index) position = "slide"; // Current Slide
        if (
          index === current.index - 1 ||
          (current.index === 0 && index === max)
        ) {
          position = "prev-slide"; // Previous Slide
        }
        return <Slide key={person.id} person={person} className={position} />;
      })}
      <button className="left" onClick={prev}>
        &lt;&lt;
      </button>
      <button className="right" onClick={next}>
        &gt;&gt;
      </button>
    </div>
  );
}

export default Carousel;
