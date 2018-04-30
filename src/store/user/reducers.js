import { TOKEN_PENDING, TOKEN_SUCCESS, TOKEN_FAIL } from '../constants';

const initialState = {
  pending: false,
  name: '',
  email: '',
  phone: '',
  admin: '',
  error: null,
};

const voteOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_PENDING:
      return {
        ...state,
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
        error: action.payload,
        pending: false,
      };

    default:
      return state;
  }
};

export default voteOptionReducer;
