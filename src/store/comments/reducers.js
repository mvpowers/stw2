import {
  TOGGLE_LIKE,
} from '../constants';
import initialState from './initialState';

const commentsReducer = (state = { comments: initialState }, action) => {
  switch (action.type) {
    case TOGGLE_LIKE:
      console.log('comments state', state.comments);
      console.log('userId', action.payload.userId);
      console.log('commentId', action.payload.commentId);


      return (Object.assign({}, state, {
        comments: (state.comments.map(comment =>
          (comment.id === action.payload.commentId)
            ? { ...comment, likedBy: [comment.likedBy.push(action.payload.userId)] }
            : comment)),
      }));

    default:
      return state;
  }
};

export default commentsReducer;
