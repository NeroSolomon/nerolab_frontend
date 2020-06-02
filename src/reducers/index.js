import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import language from "./language.js";

const rootReducer = combineReducers({
  routing,
  language,
});

export default rootReducer;
