import * as Actions from "./Actions/actionTypes";

export const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  error: null,
  user: null,
  loginForm: {},
  signupForm: {},
  product: {},
  productsList: [],
  loading: false,
  error: null,
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Actions.REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case Actions.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.token,
        user: payload.user,
        error: null,
      };
      break;
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.error,
      };
      break;
    case Actions.PRODUCTADDED_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        
        error: null,
      };
      break;
    case Actions.PRODUCTADDED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      break;
    case Actions.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
      break;
    case Actions.SIGNUP_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.error,
      };
      break;
    case Actions.PRODUCTLOADED_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        productsList: payload,
        error: null,
      };
      break;
    case Actions.PRODUCTLOADED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      break;
    default:
      return {
        state,
      };
      break;
  }
}
