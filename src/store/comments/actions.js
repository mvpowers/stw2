import {
  TOGGLE_LIKE,
} from '../constants';

export function toggleLike(e) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_LIKE,
      payload: {
        userId: 10,
        commentId: parseInt(e.currentTarget.getAttribute('id'), 10),
      },
    });
  };
}
