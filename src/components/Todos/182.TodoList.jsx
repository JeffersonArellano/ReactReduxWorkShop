import React from "react";
import Todo from "./182.Todo";
const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
