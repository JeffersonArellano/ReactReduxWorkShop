import { combineReducers } from "redux";
import counter from "./178.counterReducer";
import user from "./178.userReducer";
import fruits from "./181.fuitsReducer";
import todo from "./182.todoReducer";
import blog from "./186.postReducer";

export default combineReducers({
  counter,
  user,
  fruits,
  todo,
  blog,
});
