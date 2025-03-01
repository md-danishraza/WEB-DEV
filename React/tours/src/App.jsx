import Loading from "./Loading";
import "./App.css";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

import { useState, useEffect } from "react";
const App = () => {
  const [tours, setTours] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Some Error Occurred");
        }
        const data = await response.json();
        setLoading(false);
        // console.log(data);
        setTours(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [refresh]);

  const reload = () => {
    setLoading(true);
    setRefresh(!refresh);
  };
  const remove = (id) => {
    setTours((current) => {
      return current.filter((tour) => tour.id != id);
    });
  };
  return (
    <div className="main">
      <h1 className="heading">Our Tours</h1>
      <button className="btn refresh" onClick={reload}>
        Re-Load
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <Tours tours={tours} remove={remove} />
        </div>
      )}
    </div>
  );
};
export default App;
