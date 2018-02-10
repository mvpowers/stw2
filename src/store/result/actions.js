import axios from 'axios';

import { FETCH_RESULT } from '../constants';

const getResult = data => {
  return {
    type: FETCH_RESULT,
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
