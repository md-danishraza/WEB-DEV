import { useState } from "react";
import data from "./data.js";
import { useEffect } from "react";
import Category from "./Category.jsx";
import Menu from "./Menu.jsx";
const App = () => {
  const [menu, setMenu] = useState(data);
  const [category, SetCategory] = useState(null);
  useEffect(() => {
    let temp = data.map((item) => item.category);
    // eliminate duplicate categories
    let names = new Set(temp);
    names = ["all", ...names];
    SetCategory(names);
  }, []);

  const filter = (catg) => {
    if (catg == "all") {
      setMenu(data);
      return;
    }
    const fitlered = data.filter((item) => {
      return item.category == catg;
    });

    setMenu(fitlered);
  };
  return (
    <div className="main">
      <h2>MENU</h2>
      {category && <Category category={category} filter={filter} />}
      <Menu menu={menu} />
    </div>
  );
};
export default App;
