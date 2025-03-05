import React, { useState } from "react";

function Form({ setItems }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const value = e.target.value;
    if (!inputValue) {
      alert("empty!!");
      return;
    }

    setItems((current) => {
      const copy = [...current, { name: inputValue, completed: false }];
      // saving to local storage
      // localStorage.setItem("lists", JSON.stringify(copy));
      return copy;
    });

    setInputValue("");
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
