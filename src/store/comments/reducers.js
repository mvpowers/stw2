import {
  TOGGLE_LIKE,
} from '../constants';
import initialState from './initialState';

const commentsReducer = (state = { comments: initialState }, action) => {
  switch (action.type) {
    case TOGGLE_LIKE:
      return (Object.assign({}, state, {
        comments: (state.comments.map(comment =>
          (comment.id === action.payload.commentId)
            ? { ...comment, likedBy: [...comment.likedBy, action.payload.userId] }
            : comment)),
      }));

    default:
      return state;
  }
};

export default commentsReducer;
