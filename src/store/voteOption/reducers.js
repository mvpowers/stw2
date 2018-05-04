import {
  VOTE_OPTIONS_PENDING,
  VOTE_OPTIONS_SUCCESS,
  VOTE_OPTIONS_FAIL,
  VOTE_OPTIONS_ERROR_CLEAR,
} from '../constants';

const initialState = {
  options: [
    {
      _id: '',
      name: '',
      description: '',
    },
  ],
  error: [],
};

const voteOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case VOTE_OPTIONS_PENDING:
      return {
        ...state,
        pending: true,
      };

    case VOTE_OPTIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        options: action.payload,
      };

    case VOTE_OPTIONS_FAIL:
      return {
        ...state,
        pending: false,
        error: [...state.error, action.payload],
      };
    case VOTE_OPTIONS_ERROR_CLEAR:
      return {
        ...state,
        error: [],
      };

    default:
      return state;
  }
};

export default voteOptionReducer;
