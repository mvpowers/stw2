import {
  ADD_LIKE,
  REMOVE_LIKE,
} from '../constants';

export function toggleLike(e) {
  const likes = e.currentTarget.getAttribute('liked').split(',');
  const user = e.currentTarget.getAttribute('user');

  // like
  if (!likes.includes(user)) {
    return (dispatch) => {
      dispatch({
        type: ADD_LIKE,
        payload: {
          userId: 10,
          commentId: parseInt(e.currentTarget.getAttribute('id'), 10),
        },
      });
    };
  }
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
