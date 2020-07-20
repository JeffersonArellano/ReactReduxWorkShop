import { ADD_FRUIT, REMOVE_FRUIT } from "../actions/181.fruitsActions";

const initialState = ["Strawberry", "Apple", "Orange", "Mango"];

function fruits(state = initialState, action) {
  switch (action.type) {
    case ADD_FRUIT:
      //return state.concat(action.payload.fruit);
      return [...state, action.payload.fruit];
    default:
      return initialState;
  }
}

export default fruits;
