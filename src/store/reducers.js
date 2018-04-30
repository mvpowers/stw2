import { combineReducers } from 'redux';
import result from './result/reducers';
import voteOptions from './voteOption/reducers';
import user from './user/reducers';

export default combineReducers({
  result,
  voteOptions,
  user,
});
