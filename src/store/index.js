import {
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default (initialState = {}) => {
  const middleware = [thunk];

  const enhancers = [];
  let composeEnhancers = compose;

  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  const store = createReduxStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  return store;
};
