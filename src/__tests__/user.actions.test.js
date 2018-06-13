import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../store/constants';
import * as actions from '../store/user/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('user actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch TOKEN_SUCCESS after TOKEN_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.TOKEN_PENDING },
        { type: types.TOKEN_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchToken()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch TOKEN_FAIL after TOKEN_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.TOKEN_PENDING },
        { type: types.TOKEN_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchToken()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch SIGNUP_SUCCESS after SIGNUP_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.SIGNUP_PENDING },
        { type: types.SIGNUP_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.register()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch SIGNUP_FAIL after SIGNUP_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.SIGNUP_PENDING },
        { type: types.SIGNUP_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.register()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch RESET_TOKEN_SUCCESS after RESET_TOKEN_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.RESET_TOKEN_PENDING },
        { type: types.RESET_TOKEN_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.createPasswordResetToken()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch RESET_TOKEN_FAIL after RESET_TOKEN_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.RESET_TOKEN_PENDING },
        { type: types.RESET_TOKEN_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.createPasswordResetToken()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch UPDATE_PASSWORD_SUCCESS after UPDATE_PASSWORD_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.UPDATE_PASSWORD_PENDING },
        { type: types.UPDATE_PASSWORD_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.updatePassword()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch UPDATE_PASSWORD_FAIL after UPDATE_PASSWORD_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.UPDATE_PASSWORD_PENDING },
        { type: types.UPDATE_PASSWORD_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.updatePassword()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch UPDATE_PASSWORD_SUCCESS after UPDATE_PASSWORD_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.UPDATE_PASSWORD_PENDING },
        { type: types.UPDATE_PASSWORD_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.updatePassword()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch UPDATE_PASSWORD_FAIL after UPDATE_PASSWORD_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.UPDATE_PASSWORD_PENDING },
        { type: types.UPDATE_PASSWORD_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.updatePassword()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch UPDATE_USER_SUCCESS after UPDATE_USER_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.UPDATE_USER_PENDING },
        { type: types.UPDATE_USER_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.updateUser()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch UPDATE_USER_FAIL after UPDATE_USER_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.UPDATE_USER_PENDING },
        { type: types.UPDATE_USER_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.updateUser()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });
});
