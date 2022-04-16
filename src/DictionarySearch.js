import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <h1>Dictionary</h1>
      <form className="searchBar" onSubmit={search}>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Type a word..."
              className="form-control lg"
              autoFocus={true}
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
