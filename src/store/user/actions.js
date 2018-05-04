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
