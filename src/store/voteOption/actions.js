import axios from 'axios';
import config from '../../config';
import {
  VOTE_OPTIONS_PENDING,
  VOTE_OPTIONS_SUCCESS,
  VOTE_OPTIONS_FAIL,
} from '../constants';

const failedVoteOptions = data => ({
  type: VOTE_OPTIONS_FAIL,
  payload: data,
});

const getVoteOptions = data => ({
  type: VOTE_OPTIONS_SUCCESS,
  payload: data,
});

export const fetchVoteOptions = token => dispatch => {
  dispatch({ type: VOTE_OPTIONS_PENDING });
  return axios
    .get(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/voteOption`, {
      headers: { 'x-access-token': token },
    })
    .then(res => {
      dispatch(getVoteOptions(res.data));
    })
    .catch(err => {
      dispatch(failedVoteOptions(err.response.data));
    });
};
