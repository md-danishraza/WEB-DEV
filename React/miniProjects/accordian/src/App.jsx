import { useEffect, useState } from "react";
import datas from "./data.js";
import Accordian from "./Accordian";

const App = () => {
  const [data, setData] = useState(datas);

  const update = (id) => {
    setData((current) => {
      return current.map((item) => {
        if (item.id === id) {
          if (item.show) {
            return { ...item, show: false };
          }
          return { ...item, show: true };
        } else {
          return { ...item, show: false };
        }
      });
    });
  };

  useEffect(() => {
    setData(() => {
      const copy = datas.map((item) => {
        item["show"] = false;
        return item;
      });
      return copy;
    });
  }, []);
  return (
    <div className="main">
      <div className="accordians">
        <h1 className="heading">Questions</h1>
        {data.map((data) => {
          return <Accordian data={data} key={data.id} update={update} />;
        })}
      </div>
    </div>
  );
};
export default App;
