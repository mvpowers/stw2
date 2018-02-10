import { FETCH_RESULT, FETCH_QUESTION } from '../constants';

const initialState = {
  data: {
    votes: [],
    comments: [{ id: null, voteFor: '', commentText: '', likedBy: [] }],
    votesVisible: null,
    active: null,
    _id: '',
    question: '',
    __v: null,
  },
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION:
      return {
        ...state,
        data: {
          ...state.data,
          question: action.payload.question,
        },
      };

    case FETCH_RESULT:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default voteReducer;
