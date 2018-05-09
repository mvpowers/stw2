import {
  TOKEN_PENDING,
  TOKEN_SUCCESS,
  TOKEN_FAIL,
  TOKEN_CLEAR,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  RESET_TOKEN_PENDING,
  RESET_TOKEN_SUCCESS,
  RESET_TOKEN_FAIL,
  UPDATE_PASSWORD_PENDING,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_ERROR_CLEAR,
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
  tokenResetMessage: '',
  resetError: [],
  userUpdateMessage: '',
  userUpdateError: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ERROR_CLEAR:
      return {
        ...state,
        error: [],
        signupError: [],
        userUpdateError: [],
        userUpdateMessage: '',
      };

    case TOKEN_PENDING:
      return {
        ...state,
        error: [],
        pending: true,
        newRegister: false,
      };

    case TOKEN_SUCCESS:
      const { id, name, email, phone } = jwtDecode(action.payload.token);
      return {
        ...state,
        pending: false,
        token: action.payload.token,
        id,
        name,
        email,
        phone,
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
        id: '',
        name: '',
        email: '',
        phone: '',
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
        error: [],
        signupError: [],
      };

    case SIGNUP_FAIL:
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

    case RESET_TOKEN_PENDING:
      return {
        ...state,
        pending: true,
        resetError: [],
        tokenResetMessage: '',
      };

    case RESET_TOKEN_SUCCESS:
      return {
        ...state,
        pending: false,
        tokenResetMessage: action.payload,
        resetError: [],
      };

    case RESET_TOKEN_FAIL:
      return {
        ...state,
        pending: false,
        resetError: [...state.resetError, action.payload],
        tokenResetMessage: '',
      };

    case UPDATE_PASSWORD_PENDING:
      return {
        ...state,
        pending: true,
        resetError: [],
        tokenResetMessage: '',
      };

    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        pending: false,
        resetError: [],
        newRegister: true,
      };

    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        pending: false,
        resetError: [...state.resetError, action.payload],
      };

    case UPDATE_USER_PENDING:
      return {
        ...state,
        pending: true,
        userUpdateMessage: '',
        userUpdateError: [],
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        userUpdateMessage: action.payload.message,
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
      };

    case UPDATE_USER_FAIL:
      return {
        ...state,
        pending: false,
        userUpdateError: [...state.userUpdateError, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
