import {
  RESULT_PENDING,
  RESULT_SUCCESS,
  RESULT_FAIL,
  QUESTION_PENDING,
  QUESTION_SUCCESS,
  QUESTION_FAIL,
  TOGGLE_LIKE,
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
    case QUESTION_PENDING:
      return {
        ...state,
        pending: true,
      };

    case QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload.question,
        pending: false,
      };

    case QUESTION_FAIL:
      return {
        ...state,
        error: action.payload,
        pending: false,
      };

    case RESULT_PENDING:
      return {
        ...state,
        pending: true,
      };

    case RESULT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        pending: false,
      };

    case RESULT_FAIL:
      return {
        ...state,
        error: action.payload,
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
