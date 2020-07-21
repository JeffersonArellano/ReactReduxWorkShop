import React from "react";
import { Provider } from "react-redux";
import store from "./redux/178.store";
// import Counter from "./components/178.Counter";
// import UserInfo from "./components/178.Info";
//import Fruits from "./components/181.Fruits";
//import Todos from "./components/Todos/182.Todos";
//import Controller from "./components/185.Controller";
import Blog from "./components/186.Blog";
const Component = () => {
  return (
    <Provider store={store}>
      <Blog />

      {/*
      <Controller/> 
      <Todos /> 
      <UserInfo />
      <Counter /> 
      */}
    </Provider>
  );
};

export default Component;
