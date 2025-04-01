import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  const clear = () => {
    setPeople([]);
  };
  return (
    <main>
      <div className="container">
        <h2>Birthday Reminder - Starter</h2>;
        <h3>{people.length} BirthDays Today</h3>
        {people.map((person) => {
          return (
            <div className="person" key={person.id}>
              <img src={person.image} alt="" className="img" />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age}</p>
              </div>
            </div>
          );
        })}
        <button className="btn btn-block" onClick={clear}>
          Clear
        </button>
      </div>
    </main>
  );
};
export default App;
