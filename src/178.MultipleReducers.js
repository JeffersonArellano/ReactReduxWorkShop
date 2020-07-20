import React from "react";
import { Provider } from "react-redux";
import store from "./redux/178.store";
// import Counter from "./components/178.Counter";
// import UserInfo from "./components/178.Info";
//import Fruits from "./components/181.Fruits";
import Todos from "./components/Todos/182.Todos";
const Component = () => {
  return (
    <Provider store={store}>
      <Todos />
      {/* <UserInfo />
      <Counter /> */}
    </Provider>
  );
};

export default Component;
