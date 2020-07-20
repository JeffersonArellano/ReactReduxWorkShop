import React from "react";
import { connect } from "react-redux";
import { incrementAsync } from "../redux/actions/178.counterActions";

const controller = (props) => {
  console.log(props);

  const handler = () => {
    props.dispatch(incrementAsync(1000));
  };

  return (
    <div>
      Controller
      <button onClick={handler}>Dispatch</button>
      <h1>{props.counter}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(controller);
