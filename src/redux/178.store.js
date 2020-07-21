import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/178.index";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Middleware

const confirmDeleteTodo = (store) => (next) => (action) => {
  if (action.type === "DELETE_TODO") {
    let conf = window.confirm("Are you sure want to delete the TODO?");

    if (conf) {
      next(action);
    }
  } else {
    next(action);
  }

  //   setTimeout(() => {
  //     next(action);
  //   }, 1000);

  //   if (action.type !== "ADD_TODO") {
  //     setTimeout(() => {
  //       store.dispatch({
  //         type: "ADD_TODO",
  //         payload: {
  //           text: "Todo from middleware",
  //           checked: false,
  //           id: "jkdsayw7",
  //         },
  //       });
  //     }, 4000);
  //   }
};

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeWithDevTools({
  name: "Redux",
  realtime: true,
  trace: true,
  traceLimit: 20,
});

/*Store stores the state*/
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
