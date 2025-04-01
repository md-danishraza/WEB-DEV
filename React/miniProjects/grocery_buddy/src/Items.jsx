import React from "react";
import SingleItem from "./SingleItem";
import { nanoid } from "nanoid";
function Items({ items, removeItem, setItems }) {
  return (
    <div className="items">
      {items.map((item) => {
        const id = nanoid();
        return (
          <SingleItem
            item={item}
            key={id}
            id={id}
            removeItem={removeItem}
            setItems={setItems}
          />
        );
      })}
    </div>
  );
}

export default Items;
