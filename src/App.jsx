import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "~/src/router/routes.js";
import { configStore } from "~/src/store/store-config.js";
import "./App.css";

const store = configStore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>{routes}</Router>
        </Provider>
      </div>
    );
  }
}

export default App;
