import React from "react";
import { connect } from "react-redux";
import {} from "../redux/178.store";
import { updateName } from "../redux/actions/178.userActions";

const UserInfo = (props) => {
  const handleOnChange = (e) => {
    const name = e.target.value;
    props.updateName(name);
  };

  return (
    <div>
      <p>
        Name : {props.user.name} - Country {props.user.country}
      </p>
      <input type="text" onChange={handleOnChange}></input>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    count: state.counter,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    updateName: (name) => dispatch(updateName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(UserInfo);
