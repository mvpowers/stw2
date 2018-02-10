import axios from 'axios';

import { FETCH_RESULT, FETCH_QUESTION } from '../constants';

const getResult = data => {
  return {
    type: FETCH_RESULT,
    payload: data,
  };
};

const getQuestion = data => {
  return {
    type: FETCH_QUESTION,
    payload: data,
  };
};

export function fetchResult() {
  return dispatch =>
    axios
      .get('http://localhost:9000/result/active')
      .then(res => {
        dispatch(getResult(res.data));
      })
      .catch(err => {
        console.log('Error:', err);
      });
}

export function fetchQuestion() {
  return dispatch =>
    axios
      .get('http://localhost:9000/result/question')
      .then(res => {
        dispatch(getQuestion(res.data));
      })
      .catch(err => {
        console.log('Error:', err);
      });
}