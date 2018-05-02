import {
  VOTE_OPTIONS_PENDING,
  VOTE_OPTIONS_SUCCESS,
  VOTE_OPTIONS_FAIL,
} from '../constants';

const initialState = {
  options: [
    {
      _id: '',
      name: '',
      description: '',
    },
  ],
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
        error: action.payload,
      };

    default:
      return state;
  }
};

export default voteOptionReducer;
