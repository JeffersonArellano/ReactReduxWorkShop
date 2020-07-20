import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actions/182.todosAction";

const initialState = {
  todos: [
    { text: "Create component ", id: "af163sa", checked: false },
    { text: "Upload lesson videos ", id: "lkj872", checked: true },
    { text: "Review workshops", id: "k143ua", checked: false },
  ],
};

function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              checked: !todo.checked,
            };
          }
          return todo;
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
}

export default todo;
