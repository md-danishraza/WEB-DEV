import { useState } from "react";
import textData from "./data";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState(textData.slice(0, 1));
  return (
    <div className="main">
      <h1>Lorem Ipsum</h1>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          setText(textData.slice(0, count));
        }}
      >
        <label htmlFor="count">
          Paragraph:
          <input
            type="number"
            name="count"
            id="count"
            value={count}
            min={1}
            max={8}
            onChange={(evt) => setCount(evt.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-inline">
          Get
        </button>
      </form>
      <div className="pg">
        {text.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </div>
    </div>
  );
};
export default App;
