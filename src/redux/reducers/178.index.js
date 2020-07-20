import { combineReducers } from "redux";
import counter from "./178.counterReducer";
import user from "./178.userReducer";

export default combineReducers({
  counter,
  user,
});
