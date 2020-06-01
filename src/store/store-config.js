import { createStore } from "redux";
import rootReducer from "~/src/reducers/index.js";

export const configStore = (initialState) => {
  return createStore(rootReducer, initialState);
};
