import {reducer, } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  error: null,
  user: null,
  loginForm: {},
  signupForm: {},
  product: {},
  loading: false,
  error: null,
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
