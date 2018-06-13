import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../store/constants';
import * as actions from '../store/result/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('group actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch RESULT_SUCCESS after RESULT_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.RESULT_PENDING },
        { type: types.RESULT_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchResult()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch RESULT_FAIL after RESULT_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.RESULT_PENDING },
        { type: types.RESULT_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchResult()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch QUESTION_SUCCESS after QUESTION_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.RESULT_PENDING },
        { type: types.RESULT_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchQuestion()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch QUESTION_FAIL after QUESTION_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.RESULT_PENDING },
        { type: types.RESULT_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchQuestion()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });
});
