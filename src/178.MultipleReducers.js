import React from "react";
import { Provider } from "react-redux";
import store from "./redux/178.store";
import Counter from "./components/178.Counter";
import UserInfo from "./components/178.Info";

const Component = () => {
  return (
    <Provider store={store}>
      <Counter />
      <UserInfo />
    </Provider>
  );
};

export default Component;
