import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import reviews from "./data.js";
import Review from "./Review.jsx";
const App = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const max = reviews.length;
  const previous = () => {
    setDirection("prev");
    if (index == 0) {
      setIndex(max - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const next = () => {
    setDirection("next");
    if (index == max - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const random = () => {
    const rand = Math.floor(Math.random() * max);
    setIndex(rand);
  };
  return (
    <div className="main">
      <TransitionGroup>
        <CSSTransition
          key={index}
          classNames={direction === "prev" ? "card" : "card-next"}
          timeout={500}
        >
          <div className="card">
            <Review
              review={reviews[index]}
              updators={{ previous, next, random }}
            />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default App;
