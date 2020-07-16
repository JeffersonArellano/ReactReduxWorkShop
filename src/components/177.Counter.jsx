import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../177.store";

const Counter = (props) => {
  const incFunc = () => {
    props.dispatch(increment());
  };

  const decFunc = () => {
    props.dispatch(decrement());
  };

  return (
    <div>
      <button onClick={incFunc}>+</button>
      <button onClick={decFunc}>-</button>
      <h1>{props.count}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

export default connect(mapStateToProps)(Counter);
