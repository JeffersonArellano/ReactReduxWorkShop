import React from "react";
import { connect } from "react-redux";
import {} from "../178.store";

const UserInfo = (props) => {
  return (
    <div>
      <p>
        Name : {props.name} - Count {props.count}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    count: state.counter,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToPros)(UserInfo);
