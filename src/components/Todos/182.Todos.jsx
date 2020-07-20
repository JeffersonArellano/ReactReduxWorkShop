import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../redux/actions/182.todosAction";
import { getId } from "../../182.utils";
import TodoForm from "./182.TodoForm";
import TodoList from "./182.TodoList";

const Todos = ({ todo, addTodo, updateTodo, deleteTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    e.target[0].value = "";

    addTodo({
      text,
      checked: false,
      id: getId(),
    });
  };

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todo.todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Todos);
