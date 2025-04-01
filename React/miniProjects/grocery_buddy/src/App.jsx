import { useState, useEffect } from "react";
import Form from "./Form";
import Items from "./Items";
const App = () => {
  const [items, setItems] = useState([{ name: "milk", completed: false }]);
  const removeItem = (name) => {
    setItems((current) => {
      return current.filter((item) => item.name != name);
    });
  };

  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem("lists"));
    // console.log(lists);
    if (lists) {
      setItems(lists);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <main>
      <div className="container">
        <h2 className="heading">Grocery buddy</h2>
        <Form setItems={setItems} />
        <Items items={items} removeItem={removeItem} setItems={setItems} />
      </div>
    </main>
  );
};

export default App;
