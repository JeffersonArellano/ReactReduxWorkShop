import { INCREMENT, DECREMENT } from "../actions/178.counterActions";

/* Reducer is a pure function that returns
actual state
*/
var initialState = 0;

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}

export default counter;
