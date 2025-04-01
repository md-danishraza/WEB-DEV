import React from "react";

function Category({ category, filter }) {
  //   console.log(category);
  return (
    <div className="categories">
      {category.map((item) => {
        return (
          <button key={item} onClick={() => filter(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
