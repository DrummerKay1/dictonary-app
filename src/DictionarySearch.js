import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./DictionarySearch.css";

export default function DictionarySearch(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001c10ae4f4efc549fa94eb33541e4a40d5";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="DictionarySearch">
        <div className="search">
          <section>
            <h1>Dictionary</h1>
            <form className="searchBar" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Search a word..."
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
            <div className="hint">
              Suggested words: travel, explore, forest...
            </div>
          </section>
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    return load();
  }
}
