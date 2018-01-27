import {
  ADD_LIKE,
  REMOVE_LIKE,
} from '../constants';
import initialState from './initialState';
import { removeArrEl } from '../../shared';

const commentsReducer = (state = { comments: initialState }, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return (Object.assign({}, state, {
        comments: (state.comments.map(comment =>
          (comment.id === action.payload.commentId)
            ? { ...comment, likedBy: [...comment.likedBy, action.payload.userId] }
            : comment)),
      }));

    case REMOVE_LIKE:
      return (Object.assign({}, state, {
        comments: (state.comments.map(comment =>
          (comment.id === action.payload.commentId
            ? { ...comment, likedBy: removeArrEl([...comment.likedBy], action.payload.userId) }
            : comment))),
      }));

    default:
      return state;
  }
};

export default commentsReducer;
