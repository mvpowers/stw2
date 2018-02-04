import { FETCH_RESULT } from '../constants';

const initialState = {
  data: {
    votes: [],
    comments: [],
    votesVisible: null,
    active: null,
    _id: '',
    question: '',
    __v: 0,
  },
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULT:
      return Object.assign({}, state, {
        data: action.payload,
      });

    default:
      return state;
  }
};

export default voteReducer;
