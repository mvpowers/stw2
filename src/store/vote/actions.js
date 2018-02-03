import axios from 'axios';

import {
  UPDATE_VOTE_ID,
  UPDATE_VOTE_COMMENT,
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_RESULT,
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

const getResult = (data) => {
  return {
    type: FETCH_RESULT,
    payload: data,
  };
};

export function fetchResult() {
  return (dispatch) => {
    return axios
      .get('http://localhost:9000/result/question')
      .then((res) => {
        dispatch(getResult(res.data));
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };
}
