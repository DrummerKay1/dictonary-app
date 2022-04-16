import DictionarySearch from "./DictionarySearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <DictionarySearch />
        <footer className="footer">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/kayla-neuss-0072ba229/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Kayla Neuss
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/DrummerKay1/dictonary-app"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
