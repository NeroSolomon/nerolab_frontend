import React from "react";
import { Route } from "react-router-dom";
import Frame from "~/src/containers/frame/Frame.jsx";

export default (
  <div>
    <Route exact path="/">
      <Frame />
    </Route>
  </div>
);
