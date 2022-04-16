import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
    let apiUrl = `http://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
