import axios from 'axios';
import config from '../../config';
import {
  GROUPS_PENDING,
  GROUPS_SUCCESS,
  GROUPS_FAIL,
  GROUPS_ERROR_CLEAR,
  NEW_GROUP_PENDING,
  NEW_GROUP_SUCCESS,
  NEW_GROUP_FAIL,
} from '../constants';

const getGroups = data => ({
  type: GROUPS_SUCCESS,
  payload: data,
});

const failedGroups = data => ({
  type: GROUPS_FAIL,
  payload: data,
});

const newGroup = data => ({
  type: NEW_GROUP_SUCCESS,
  payload: data,
});

const failedNewGroup = data => ({
  type: NEW_GROUP_FAIL,
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

export const createGroup = (token, name) => dispatch => {
  dispatch({ type: NEW_GROUP_PENDING });
  return axios
    .post(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/group/new`,
      {
        name,
      },
      { headers: { 'x-access-token': token } },
    )
    .then(res => {
      dispatch(newGroup(res.data));
    })
    .catch(err => {
      dispatch(failedNewGroup(err.response.data));
    });
};
