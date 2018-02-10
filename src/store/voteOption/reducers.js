import { FETCH_VOTE_OPTIONS } from '../constants';

const initialState = {
  data: [
    {
      _id: '',
      name: '',
      description: '',
    },
  ],
};

const voteOptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VOTE_OPTIONS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default voteOptionReducer;
