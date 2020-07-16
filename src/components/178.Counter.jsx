import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../178.store";

const Counter = ({ increment, decrement, counter, name }) => {
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>{counter}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    name: state.user.name,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Counter);
