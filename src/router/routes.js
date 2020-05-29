import React from "react";
import { Route, Switch } from "react-router-dom";
import Frame from "~/src/containers/frame/Frame.jsx";
import Posts from "~/src/containers/posts/Posts.jsx";

export default (
  <Switch>
    <Route exact path="/">
      <Frame />
    </Route>
    <Route path="/posts">
      <Posts />
    </Route>
  </Switch>
);
