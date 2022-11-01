import axios from "axios";
import { REQUEST_URL } from "../constantURLs";
import * as actions from "./actionTypes";
// import {initialState} from "../reducer"
// const token = sessionStorage.getItem("token"); //Add this line

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loadProducts = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  axios
    .get(REQUEST_URL + "product", config)
    .then((res) => {
      dispatch({
        type: actions.PRODUCTLOADED_SUCCESSFULLY,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actions.PRODUCTADDED_FAIL,
      });
    });
};

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(REQUEST_URL + "login", body, config);
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actions.LOGIN_FAILURE,
    });
  }
};

export const signup = (username, email, password) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axios.post(REQUEST_URL + "user", body, config);
    dispatch({
      type: actions.SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actions.SIGNUP_FAILURE,
    });
  }
};

export const addProduct =
  (product_name, description, price, quantity) => async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const body = JSON.stringify({ product_name, description, price, quantity });
    try {
      const res = await axios.post(REQUEST_URL + "product", body, config);
      dispatch({
        type: actions.PRODUCTADDED_SUCCESSFULLY,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: actions.PRODUCTADDED_FAIL,
      });
    }
  };
