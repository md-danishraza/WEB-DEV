import React, { useState } from "react";

function SingleItem({ item, id, removeItem, setItems }) {
  const [check, setCheck] = useState(item.completed);

  const update = () => {
    setCheck((prev) => !prev);
    setItems((current) => {
      return current.map((element) => {
        if (element.name == item.name) {
          return { ...element, completed: !element.completed };
        } else {
          return element;
        }
      });
    });
  };
  return (
    <div className="item">
      <fieldset>
        <input id={id} type="checkbox" checked={check} onChange={update} />
        <label
          htmlFor={id}
          style={check ? { textDecoration: "line-through" } : {}}
        >
          {item.name}
        </label>
      </fieldset>
      <button onClick={() => removeItem(item.name)}>Delete</button>
    </div>
  );
}

export default SingleItem;
