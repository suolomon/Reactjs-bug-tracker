import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, combinedReducers } from "@reduxjs/toolkit";

//Reducers
import authReducer from "./Controllers/Redux/authSlice";
import bugReducer from "./Controllers/Redux/bugSlice";
import userReducer from "./Controllers/Redux/userSlice";

//Redux configure
const reducer = combinedReducers({
  auth: authReducer,
  bug: bugReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
