import {
  FETCH_RESULT,
  FETCH_QUESTION,
  TOGGLE_LIKE,
  RESULTS_PENDING,
} from '../constants';

const initialState = {
  votes: [],
  comments: [{ _id: '', voteFor: '', commentText: '', likedBy: [] }],
  votesVisible: null,
  active: null,
  _id: '',
  question: '',
  pending: false,
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION:
      return {
        ...state,
        question: action.payload.question,
      };

    case RESULTS_PENDING:
      return {
        ...state,
        pending: true,
      };

    case FETCH_RESULT:
      return {
        ...state,
        ...action.payload,
        pending: false,
      };

    case TOGGLE_LIKE:
      return {
        ...state,
        comments: [...action.payload.comments],
      };

    default:
      return state;
  }
};

export default voteReducer;
