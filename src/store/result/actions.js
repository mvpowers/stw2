import axios from 'axios';
import { FETCH_RESULT, FETCH_QUESTION } from '../constants';

const getResult = data => ({
  type: FETCH_RESULT,
  payload: data,
});

const getQuestion = data => ({
  type: FETCH_QUESTION,
  payload: data,
});

export const fetchResult = () => dispatch =>
  axios
    .get('http://localhost:9000/result/active')
    .then(res => {
      dispatch(getResult(res.data));
    })
    .catch(err => {
      console.log(err);
    });

export const fetchQuestion = () => dispatch =>
  axios
    .get('http://localhost:9000/result/question')
    .then(res => {
      dispatch(getQuestion(res.data));
    })
    .catch(err => {
      console.log(err);
    });

export const postVote = () => dispatch =>
  axios.post('http://localhost:9000/result/question', {

  })