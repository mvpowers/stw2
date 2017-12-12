import {
  ADD_LIKE,
  REMOVE_LIKE,
} from '../constants';

export function toggleLike(e) {

  // TODO function to choose between the two dispatches
  // like
  return (dispatch) => {
    dispatch({
      type: ADD_LIKE,
      payload: {
        userId: 10,
        commentId: parseInt(e.currentTarget.getAttribute('id'), 10),
      },
    });
  };

  // dislike
  return (dispatch) => {
    dispatch({
      type: REMOVE_LIKE,
      payload: {
        userId: 10,
        commentId: parseInt(e.currentTarget.getAttribute('id'), 10),
      },
    });
  };
}

