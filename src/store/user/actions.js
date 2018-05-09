import axios from 'axios';
import config from '../../config';
import {
  TOKEN_PENDING,
  TOKEN_SUCCESS,
  TOKEN_FAIL,
  TOKEN_CLEAR,
  SIGNUP_PENDING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  RESET_TOKEN_PENDING,
  RESET_TOKEN_SUCCESS,
  RESET_TOKEN_FAIL,
  UPDATE_PASSWORD_PENDING,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
} from '../constants';

const getToken = data => ({
  type: TOKEN_SUCCESS,
  payload: data,
});

const failedToken = data => ({
  type: TOKEN_FAIL,
  payload: data,
});

const postRegistration = data => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

const failedRegistration = data => ({
  type: SIGNUP_FAIL,
  payload: data,
});

const getResetToken = data => ({
  type: RESET_TOKEN_SUCCESS,
  payload: data,
});

const failedResetToken = data => ({
  type: RESET_TOKEN_FAIL,
  payload: data,
});

const patchPassword = data => ({
  type: UPDATE_PASSWORD_SUCCESS,
  payload: data,
});

const failedPassword = data => ({
  type: UPDATE_PASSWORD_FAIL,
  payload: data,
});

export const clearToken = () => ({ type: TOKEN_CLEAR });

export const fetchToken = (email, password) => dispatch => {
  dispatch({ type: TOKEN_PENDING });
  axios
    .post(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/user/signin`, {
      email,
      password,
    })
    .then(res => {
      dispatch(getToken(res.data));
    })
    .catch(err => {
      dispatch(failedToken(err));
    });
};

export const register = (name, email, phone, password) => dispatch => {
  dispatch({ type: SIGNUP_PENDING });
  axios
    .post(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/user`, {
      name,
      email,
      phone,
      password,
    })
    .then(res => {
      dispatch(postRegistration(res.data));
    })
    .catch(err => {
      dispatch(failedRegistration(err.response.data));
    });
};

export const createPasswordResetToken = recoveryAccount => dispatch => {
  dispatch({ type: RESET_TOKEN_PENDING });
  axios
    .post(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/user/recover`,
      {
        recoveryAccount,
      },
    )
    .then(res => {
      dispatch(getResetToken(res.data));
    })
    .catch(err => {
      dispatch(failedResetToken(err.response.data));
    });
};

export const updatePassword = (resetToken, newPassword) => dispatch => {
  dispatch({ type: UPDATE_PASSWORD_PENDING });
  axios
    .patch(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/user/password`,
      {
        resetToken,
        newPassword,
      },
    )
    .then(res => {
      dispatch(patchPassword(res.data));
    })
    .catch(err => {
      dispatch(failedPassword(err.response.data));
    });
};
