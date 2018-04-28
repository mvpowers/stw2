import axios from 'axios';
import { FETCH_RESULT, FETCH_QUESTION, TOGGLE_LIKE } from '../constants';

const getResult = data => ({
  type: FETCH_RESULT,
  payload: data,
});

const getQuestion = data => ({
  type: FETCH_QUESTION,
  payload: data,
});

const postLike = data => ({
  type: TOGGLE_LIKE,
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

export const submitVote = (voteId, name) =>
  axios
    .post('http://localhost:9000/result/vote', {
      voteId,
      name,
    })
    .catch(err => {
      console.log(err);
    });

export const submitComment = (voteId, voteFor, text) =>
  axios
    .post('http://localhost:9000/result/comment', {
      voteId,
      voteFor,
      text,
    })
    .catch(err => {
      console.log(err);
    });

export const toggleLike = (commentId, userId) => dispatch =>
  axios
    .post('http://localhost:9000/result/like', {
      commentId,
      userId,
    })
    .then(res => {
      dispatch(postLike(res.data));
    })
    .catch(err => {
      console.log(err);
    });
