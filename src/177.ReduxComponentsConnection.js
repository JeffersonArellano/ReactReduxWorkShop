import React from "react";
import { Provider } from "react-redux";
import store from "./177.store";
import Counter from "./components/177.Counter";

const Component = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Component;
