import { combineReducers } from 'redux';

import comments from './comments/reducers';
import vote from './vote/reducers';

export default combineReducers({
  comments,
  vote,
});
