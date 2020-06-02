import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import rootReducer from "~/src/reducers/index.js";

export const configStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promise)
  );
};
