import {
  UPDATE_VOTE_ID,
  UPDATE_VOTE_COMMENT,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../constants';

const voteReducer = (state = { modalStatus: false, isFetching: false }, action) => {
  switch (action.type) {
    case UPDATE_VOTE_ID:
      return Object.assign({}, state, {
        ...state,
        userId: 3,
      });

    case UPDATE_VOTE_COMMENT:
      return Object.assign({}, state, {
        ...state,
        comment: action.payload.comment,
      });

    case OPEN_MODAL:
      return Object.assign({}, state, {
        ...state,
        modalStatus: true,
        userId: action.payload.userId,
      });

    case CLOSE_MODAL:
      return Object.assign({}, state, {
        ...state,
        modalStatus: false,
      });

    default:
      return state;
  }
};

export default voteReducer;
