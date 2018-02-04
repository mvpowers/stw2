import { FETCH_RESULT } from '../constants';

const initialState = {
  data: {
    votes: [],
    comments: [{ id: null, voteFor: '', commentText: '', likedBy: [null] }],
    votesVisible: null,
    active: null,
    _id: '',
    question: '',
    __v: null,
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
