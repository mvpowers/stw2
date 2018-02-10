import { combineReducers } from 'redux';
import result from './result/reducers';
import voteOptions from './voteOption/reducers';

export default combineReducers({
  result,
  voteOptions,
});
