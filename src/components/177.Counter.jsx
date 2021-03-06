import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../177.store";

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <h1>{props.count}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Counter);
