import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input
        className="input"
        onChange={inputHandler}
        type="text"
        placeholder="請輸入搜尋關鍵字"
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
