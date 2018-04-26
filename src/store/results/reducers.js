import {
  UPDATE_VOTE_ID,
  UPDATE_VOTE_COMMENT,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_RESULT,
} from '../constants';

const resultReducer = (state = { modalStatus: false, isFetching: false, vote: { question: '' } }, action) => {
  switch (action.type) {
    case UPDATE_VOTE_ID:
      return Object.assign({}, state, {
        userId: 3,
      });

    case UPDATE_VOTE_COMMENT:
      return Object.assign({}, state, {
        comment: action.payload.comment,
      });

    case OPEN_MODAL:
      return Object.assign({}, state, {
        modalStatus: true,
        userId: action.payload.userId,
      });

    case CLOSE_MODAL:
      return Object.assign({}, state, {
        modalStatus: false,
      });

    case FETCH_RESULT:
      return Object.assign({}, state, {
        vote: action.payload,
      });

    default:
      return state;
  }
};

export default resultReducer;
