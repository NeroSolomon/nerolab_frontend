import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "~/src/router/routes.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>{routes}</Router>
      </div>
    );
  }
}

export default App;
