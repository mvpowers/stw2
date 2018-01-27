import fetch from 'cross-fetch';

import {
  UPDATE_VOTE_ID,
  UPDATE_VOTE_COMMENT,
  OPEN_MODAL,
  CLOSE_MODAL,
  REQUEST_RESULT,
  RECEIVE_RESULT,
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

export function requestResult() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_RESULT,
    });
  };
}

export function receiveResult(json) {
  return (dispatch) => {
    dispatch({
      type: RECEIVE_RESULT,
      payload: json,
    });
  };
}
