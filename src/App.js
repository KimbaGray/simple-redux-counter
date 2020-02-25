import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const initialState = {
  count: 5
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "MORE_MONEY":
      return {
        count: state.count * 10
      };
    case "LESS":
      return {
        count: state.count - 5
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default App;
