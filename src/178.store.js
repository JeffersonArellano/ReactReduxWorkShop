import { createStore } from "redux";
import rootReducer from "./reducers/178.index";
import { INCREMENT, DECREMENT } from "./reducers/178.counter";

//Actions Creators
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

/*Store stores the state*/
const store = createStore(rootReducer);

export default store;
