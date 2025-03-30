import React, { useState } from "react";
import { useAppContext } from "./AppContext";

function SearchForm() {
  const { searchValue, setSearchValue } = useAppContext();
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    if (event.target.elements.search.value == "") {
      alert("Search input is Empty!!!");
    } else {
      setSearchValue(event.target.elements.search.value);
    }
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder={searchValue}
        onChange={(event) => setInput(event.target.value)}
        value={input}
        className="form-input search-input"
      />
      <button type="submit">Get</button>
    </form>
  );
}

export default SearchForm;
