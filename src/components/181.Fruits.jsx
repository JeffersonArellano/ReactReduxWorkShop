import React from "react";
import { connect } from "react-redux";
import {} from "../redux/178.store";
import { addFruit } from "../redux/actions/181.fruitsActions";

const Fruits = ({ fruits, updateFruits }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fruit = e.target[0].value;
    e.target[0].value = "";
    updateFruits(fruit);
  };

  return (
    <div>
      <h1>Fruits</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Fruit"></input>
        <button>Add</button>
      </form>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={fruit + index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fruits: state.fruits,
  };
};

const mapDispatchToPros = (dispatch) => {
  return {
    updateFruits: (name) => dispatch(addFruit(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(Fruits);
