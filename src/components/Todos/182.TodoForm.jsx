import React from "react";

const TodoForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text"></input>
    <button>Add</button>
  </form>
);

export default TodoForm;
