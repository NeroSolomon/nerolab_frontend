import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { cfetch } from "~/src/utils/cfetch.js";

function App() {
  function onClick() {
    cfetch("addPost", {
      method: "POST",
      params: {
        name: "Neo11",
        title: "my third article",
        content: "my article",
      },
    }).then((response) => {
      const { code } = response.jsonResult;
      if (-1 === code) return;

      if (200 !== code) {
        console.log(response.jsonResult);
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span onClick={onClick}>fetch</span>
      </header>
    </div>
  );
}

export default App;
