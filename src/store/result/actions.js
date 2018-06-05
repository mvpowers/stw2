import axios from 'axios';
import config from '../../config';
import {
  RESULT_PENDING,
  RESULT_SUCCESS,
  RESULT_FAIL,
  QUESTION_PENDING,
  QUESTION_SUCCESS,
  QUESTION_FAIL,
  TOGGLE_LIKE,
  RESULT_ERROR_CLEAR,
} from '../constants';

const getResult = data => ({
  type: RESULT_SUCCESS,
  payload: data,
});

const failedResult = data => ({
  type: RESULT_FAIL,
  payload: data,
});

const getQuestion = data => ({
  type: QUESTION_SUCCESS,
  payload: data,
});

const failedQuestion = data => ({
  type: QUESTION_FAIL,
  payload: data,
});

const postLike = data => ({
  type: TOGGLE_LIKE,
  payload: data,
});

export const clearResultErrors = () => ({ type: RESULT_ERROR_CLEAR });

export const fetchResult = token => dispatch => {
  dispatch({ type: RESULT_PENDING });
  axios
    .get(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/result/active`,
      { headers: { 'X-Access-Token': token } },
    )
    .then(res => {
      dispatch(getResult(res.data));
    })
    .catch(err => {
      dispatch(failedResult(err.response.data));
    });
};

export const fetchQuestion = token => dispatch => {
  dispatch({ type: QUESTION_PENDING });
  axios
    .get(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/result/question`,
      { headers: { 'X-Access-Token': token } },
    )
    .then(res => {
      dispatch(getQuestion(res.data));
    })
    .catch(err => {
      dispatch(failedQuestion(err.response.data));
    });
};

export const submitVote = (voteId, name, groupId) =>
  axios
    .post(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/result/vote`, {
      voteId,
      name,
      groupId,
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
