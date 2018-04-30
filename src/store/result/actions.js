import axios from 'axios';
import config from '../../config';
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
    .get(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/result/active`)
    .then(res => {
      dispatch(getResult(res.data));
    })
    .catch(err => {
      console.log(err);
    });

export const fetchQuestion = () => dispatch =>
  axios
    .get(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/result/question`,
    )
    .then(res => {
      dispatch(getQuestion(res.data));
    })
    .catch(err => {
      console.log(err);
    });

export const submitVote = (voteId, name) =>
  axios
    .post(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/result/vote`, {
      voteId,
      name,
    })
    .catch(err => {
      console.log(err);
    });

export const submitComment = (voteId, voteFor, text) =>
  axios
    .post(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/result/comment`,
      {
        voteId,
        voteFor,
        text,
      },
    )
    .catch(err => {
      console.log(err);
    });

export const toggleLike = (userId, commentId) => dispatch =>
  axios
    .post(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/result/like`, {
      userId,
      commentId,
    })
    .then(res => {
      dispatch(postLike(res.data));
    })
    .catch(err => {
      console.log(err);
    });
