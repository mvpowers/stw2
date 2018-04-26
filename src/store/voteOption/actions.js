import axios from 'axios';
import { FETCH_VOTE_OPTIONS } from '../constants';

const getVoteOptions = data => ({
  type: FETCH_VOTE_OPTIONS,
  payload: data,
});

export const fetchVoteOptions = () => dispatch =>
  axios
    .get('http://localhost:9000/voteOption')
    .then(res => {
      dispatch(getVoteOptions(res.data));
    })
    .catch(err => {
      console.log(err);
    });
