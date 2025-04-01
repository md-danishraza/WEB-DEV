import React from "react";

function MenuItem({ item }) {
  return (
    <div className="item">
      <img src={item.img} alt="" />
      <div className="content">
        <div className="title_price">
          <h4>{item.title}</h4>
          <button>${item.price}</button>
        </div>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
