const url = "https://www.course-api.com/react-tabs-project";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const App = () => {
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          return;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setCurrent(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (error) {
    return (
      <div>
        <h1>Some Error Occured</h1>
      </div>
    );
  }
  return (
    <div className="main">
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <BtnContainer data={data} setCurrent={setCurrent} />
          <JobInfo current={current} />
        </div>
      )}
    </div>
  );
};
export default App;
