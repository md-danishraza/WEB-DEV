import React from "react";
import SingleColor from "./SingleColor";

function ColorList({ colors }) {
  //   console.log(colors[0].type);
  return (
    <div className="list">
      <div className="color">
        {colors.map((color, index) => {
          return <SingleColor color={color} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}

export default ColorList;
