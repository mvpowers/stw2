import axios from 'axios';
import config from '../../config';
import {
  TOKEN_PENDING,
  TOKEN_SUCCESS,
  TOKEN_FAIL,
  TOKEN_CLEAR,
} from '../constants';

const getToken = data => ({
  type: TOKEN_SUCCESS,
  payload: data,
});

const failedToken = data => ({
  type: TOKEN_FAIL,
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
