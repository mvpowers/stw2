import axios from 'axios';
import config from '../../config';
import {
  GROUPS_PENDING,
  GROUPS_SUCCESS,
  GROUPS_FAIL,
  GROUPS_ERROR_CLEAR,
} from '../constants';

const failedGroups = data => ({
  type: GROUPS_FAIL,
  payload: data,
});

const getGroups = data => ({
  type: GROUPS_SUCCESS,
  payload: data,
});

export const clearGroupErrors = () => ({ type: GROUPS_ERROR_CLEAR });

export const fetchGroups = token => dispatch => {
  dispatch({ type: GROUPS_PENDING });
  return axios
    .get(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/group`, {
      headers: { 'x-access-token': token },
    })
    .then(res => {
      dispatch(getGroups(res.data));
    })
    .catch(err => {
      dispatch(failedGroups(err.response.data));
    });
};
