import {
  UPDATE_VOTE_ID,
  UPDATE_VOTE_COMMENT,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../constants';

export function updateComment(e) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_VOTE_COMMENT,
      payload: {
        comment: e.target.value,
      },
    });
  };
}

export function updateId(e) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_VOTE_ID,
      payload: {
        userId: 3,
      },
    });
  };
}

export function openModal(e) {
  return (dispatch) => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        userId: e.target.getAttribute('user'),
      },
    });
  };
}

export function closeModal() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
}
