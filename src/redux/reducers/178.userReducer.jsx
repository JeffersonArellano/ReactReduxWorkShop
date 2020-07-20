import { UPDATE_NAME } from "../actions/178.userActions";

const initialState = {
  name: "Fred",
  country: "Spain",
};

function user(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}

export default user;
