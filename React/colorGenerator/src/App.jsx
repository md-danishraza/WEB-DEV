import { useState, useEffect } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState("");
  const updateColorList = (color) => {
    const newColors = new Values(color).all(10);
    // console.log(newColors);
    setColors(newColors);
  };
  // for initial load
  useEffect(() => {
    const newColors = new Values("#ff0000").all(10);
    setColors(newColors);
    // console.log(newColors);
  }, []);
  return (
    <main>
      <Form updateColorList={updateColorList} />
      <p>Click for copyToClipboard</p>
      {colors && <ColorList colors={colors} />}
    </main>
  );
};
export default App;
