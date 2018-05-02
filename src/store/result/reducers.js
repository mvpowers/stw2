import {
  FETCH_RESULT,
  FETCH_QUESTION,
  TOGGLE_LIKE,
  RESULTS_PENDING,
} from '../constants';

const initialState = {
  data: {
    votes: [],
    comments: [{ _id: '', voteFor: '', commentText: '', likedBy: [] }],
    votesVisible: null,
    active: null,
    _id: '',
    question: '',
    pending: false,
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

    case RESULTS_PENDING:
      return {
        ...state,
        data: {
          ...state.data,
          pending: true,
        },
      };

    case FETCH_RESULT:
      return {
        ...state,
        data: {
          ...action.payload,
          pending: false,
        },
      };

    case TOGGLE_LIKE:
      return {
        ...state,
        data: {
          ...state.data,
          comments: [...action.payload.comments],
        },
      };

    default:
      return state;
  }
};

export default voteReducer;
