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
  LEAVE_GROUP_PENDING,
  LEAVE_GROUP_SUCCESS,
  LEAVE_GROUP_FAIL,
  ADMIN_GROUPS_PENDING,
  ADMIN_GROUPS_SUCCESS,
  ADMIN_GROUPS_FAIL,
  SINGLE_GROUP_PENDING,
  SINGLE_GROUP_SUCCESS,
  SINGLE_GROUP_FAIL,
  ADD_OPTION_PENDING,
  ADD_OPTION_SUCCESS,
  ADD_OPTION_FAIL,
  REMOVE_OPTION_PENDING,
  REMOVE_OPTION_SUCCESS,
  REMOVE_OPTION_FAIL,
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

const removeUserFromGroup = data => ({
  type: LEAVE_GROUP_SUCCESS,
  payload: data,
});

const failedRemoveUserFromGroup = data => ({
  type: LEAVE_GROUP_FAIL,
  payload: data,
});

const getAdminGroups = data => ({
  type: ADMIN_GROUPS_SUCCESS,
  payload: data,
});

const failedAdminGroups = data => ({
  type: ADMIN_GROUPS_FAIL,
  payload: data,
});

const getSingleAdminGroup = data => ({
  type: SINGLE_GROUP_SUCCESS,
  payload: data,
});

const failedSingleAdminGroup = data => ({
  type: SINGLE_GROUP_FAIL,
  payload: data,
});

const postNewOption = data => ({
  type: ADD_OPTION_SUCCESS,
  payload: data,
});

const failedNewOption = data => ({
  type: ADD_OPTION_FAIL,
  payload: data,
});

const removeOptionFromGroup = data => ({
  type: REMOVE_OPTION_SUCCESS,
  payload: data,
});

const failedRemoveOptionFromGroup = data => ({
  type: REMOVE_OPTION_FAIL,
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

export const leaveGroup = (token, groupId) => dispatch => {
  dispatch({ type: LEAVE_GROUP_PENDING });
  return axios
    .patch(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/group/leave`,
      { groupId },
      { headers: { 'x-access-token': token } },
    )
    .then(res => {
      dispatch(removeUserFromGroup(res.data));
    })
    .catch(err => {
      dispatch(failedRemoveUserFromGroup(err.response.data));
    });
};

export const fetchAdminGroups = token => dispatch => {
  dispatch({ type: ADMIN_GROUPS_PENDING });
  return axios
    .get(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/group/admin`, {
      headers: { 'x-access-token': token },
    })
    .then(res => dispatch(getAdminGroups(res.data)))
    .catch(err => dispatch(failedAdminGroups(err.response.data)));
};

export const fetchSingleAdminGroup = (token, groupId) => dispatch => {
  dispatch({ type: SINGLE_GROUP_PENDING });
  return axios
    .get(
      `http://${config.SERVER_ADDRESS}:${
        config.SERVER_PORT
      }/group/admin/edit/${groupId}`,
      {
        headers: { 'x-access-token': token },
      },
    )
    .then(res => dispatch(getSingleAdminGroup(res.data)))
    .catch(err => dispatch(failedSingleAdminGroup(err.response.data)));
};

export const addOption = (token, groupId, name) => dispatch => {
  dispatch({ type: ADD_OPTION_PENDING });
  return axios
    .post(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/group/option`,
      {
        groupId,
        name,
      },
      { headers: { 'x-access-token': token } },
    )
    .then(res => {
      dispatch(postNewOption(res.data));
    })
    .catch(err => {
      dispatch(failedNewOption(err.response.data));
    });
};

export const removeVoteOption = (token, optionId) => dispatch => {
  dispatch({ type: REMOVE_OPTION_PENDING });
  return axios
    .patch(
      `http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/group/option`,
      { optionId },
      { headers: { 'x-access-token': token } },
    )
    .then(res => {
      dispatch(removeOptionFromGroup(res.data));
    })
    .catch(err => {
      dispatch(failedRemoveOptionFromGroup(err.response.data));
    });
};
