import { combineReducers } from 'redux';

import comments from './comments/reducers';

export default combineReducers({
  comments,
});
