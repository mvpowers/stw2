import axios from 'axios';
import config from '../../config';
import { FETCH_VOTE_OPTIONS } from '../constants';

const getVoteOptions = data => ({
  type: FETCH_VOTE_OPTIONS,
  payload: data,
});

export const fetchVoteOptions = token => dispatch =>
  axios
    .get(`http://${config.SERVER_ADDRESS}:${config.SERVER_PORT}/voteOption`, {
      headers: { 'x-access-token': token },
    })
    .then(res => {
      dispatch(getVoteOptions(res.data));
    })
    .catch(err => {
      console.log(err);
    });
