import { combineReducers } from 'redux';
import result from './result/reducers';
import groups from './group/reducers';
import user from './user/reducers';

export default combineReducers({
  result,
  groups,
  user,
});
