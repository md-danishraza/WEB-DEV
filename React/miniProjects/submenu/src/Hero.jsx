import React from "react";
import { useAppContext } from "./context";

function Hero() {
  const { setPageId } = useAppContext();
  return (
    <div className="hero-container" onMouseEnter={() => setPageId(null)}>
      <div className="hero-center">
        <h1>
          Manage Any Account <br />
          Anywhere
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          commodi corrupti numquam nesciunt aspernatur quidem rem quibusdam vero
          impedit alias, odio esse ad quas, quia iusto deserunt! Fuga,
          perferendis eum!
        </p>
      </div>
    </div>
  );
}

export default Hero;
