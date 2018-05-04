import {
  TOKEN_PENDING,
  TOKEN_SUCCESS,
  TOKEN_FAIL,
  TOKEN_CLEAR,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../constants';

const initialState = {
  pending: false,
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
      };

    case TOKEN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        pending: false,
      };

    case TOKEN_FAIL:
      return {
        ...state,
        error: [...state.error, action.payload.response.data],
        newRegister: false,
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
