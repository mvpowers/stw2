import {
  TOKEN_PENDING,
  TOKEN_SUCCESS,
  TOKEN_FAIL,
  TOKEN_CLEAR,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../constants';

const jwtDecode = require('jwt-decode');

const initialState = {
  pending: false,
  id: '',
  name: '',
  email: '',
  phone: '',
  admin: '',
  token: '',
  error: [],
  newRegister: false,
  signupError: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_PENDING:
      return {
        ...state,
        error: [],
        pending: true,
        newRegister: false,
      };

    case TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        id: jwtDecode(action.payload.token).id,
        pending: false,
      };

    case TOKEN_FAIL:
      return {
        ...state,
        error: [...state.error, action.payload.response.data],
        pending: false,
      };

    case TOKEN_CLEAR:
      return {
        ...state,
        token: '',
      };

    case SIGNUP_PENDING:
      return {
        ...state,
        pending: true,
        signupError: [],
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        pending: false,
        newRegister: true,
      };

    case SIGNUP_FAIL:
      console.log(action);
      Object.keys(action.payload.errors).forEach(key =>
        state.signupError.push(
          action.payload.errors[key].msg || action.payload.errors[key].message,
        ),
      );
      return {
        ...state,
        pending: false,
        signupError: state.signupError,
      };
    default:
      return state;
  }
};

export default userReducer;
