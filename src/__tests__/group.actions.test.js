import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../store/constants';
import * as actions from '../store/group/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('group actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch GROUPS_SUCCESS after GROUPS_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.GROUPS_PENDING },
        { type: types.GROUPS_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch GROUPS_FAIL after GROUPS_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.GROUPS_PENDING },
        { type: types.GROUPS_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch NEW_GROUP_SUCCESS after NEW_GROUP_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.NEW_GROUP_PENDING },
        { type: types.NEW_GROUP_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch NEW_GROUP_FAIL after NEW_GROUP_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.NEW_GROUP_PENDING },
        { type: types.NEW_GROUP_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch LEAVE_GROUP_SUCCESS after LEAVE_GROUP_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.LEAVE_GROUP_PENDING },
        { type: types.LEAVE_GROUP_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch LEAVE_GROUP_FAIL after LEAVE_GROUP_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.LEAVE_GROUP_PENDING },
        { type: types.LEAVE_GROUP_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch ADMIN_GROUPS_SUCCESS after ADMIN_GROUPS_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.ADMIN_GROUPS_PENDING },
        { type: types.ADMIN_GROUPS_SUCCESS },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch ADMIN_GROUPS_FAIL after ADMIN_GROUPS_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.ADMIN_GROUPS_PENDING },
        { type: types.ADMIN_GROUPS_FAIL },
      ];

      const store = mockStore();

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch SINGLE_GROUP_SUCCESS after SINGLE_GROUP_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.SINGLE_GROUP_PENDING },
        { type: types.SINGLE_GROUP_SUCCESS },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch SINGLE_GROUP_FAIL after SINGLE_GROUP_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.SINGLE_GROUP_PENDING },
        { type: types.SINGLE_GROUP_FAIL },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch ADD_OPTION_SUCCESS after ADD_OPTION_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.ADD_OPTION_PENDING },
        { type: types.ADD_OPTION_SUCCESS },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch ADD_OPTION_FAIL after ADD_OPTION_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.ADD_OPTION_PENDING },
        { type: types.ADD_OPTION_FAIL },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch REMOVE_OPTION_SUCCESS after REMOVE_OPTION_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.REMOVE_OPTION_PENDING },
        { type: types.REMOVE_OPTION_SUCCESS },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch REMOVE_OPTION_FAIL after REMOVE_OPTION_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.REMOVE_OPTION_PENDING },
        { type: types.REMOVE_OPTION_FAIL },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch REMOVE_MEMBER_SUCCESS after REMOVE_MEMBER_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.REMOVE_MEMBER_PENDING },
        { type: types.REMOVE_MEMBER_SUCCESS },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch REMOVE_MEMBER_FAIL after REMOVE_MEMBER_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.REMOVE_MEMBER_PENDING },
        { type: types.REMOVE_MEMBER_FAIL },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch JOIN_GROUP_SUCCESS after JOIN_GROUP_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.JOIN_GROUP_PENDING },
        { type: types.JOIN_GROUP_SUCCESS },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch JOIN_GROUP_FAIL after JOIN_GROUP_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.JOIN_GROUP_PENDING },
        { type: types.JOIN_GROUP_FAIL },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch APPROVE_MEMBER_SUCCESS after APPROVE_MEMBER_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.APPROVE_MEMBER_PENDING },
        { type: types.APPROVE_MEMBER_SUCCESS },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch APPROVE_MEMBER_FAIL after APPROVE_MEMBER_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.APPROVE_MEMBER_PENDING },
        { type: types.APPROVE_MEMBER_FAIL },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch DECLINE_MEMBER_SUCCESS after DECLINE_MEMBER_PENDING success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200 });

      const expectedActions = [
        { type: types.DECLINE_MEMBER_PENDING },
        { type: types.DECLINE_MEMBER_SUCCESS },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch DECLINE_MEMBER_FAIL after DECLINE_MEMBER_PENDING fail', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 500 });

      const expectedActions = [
        { type: types.DECLINE_MEMBER_PENDING },
        { type: types.DECLINE_MEMBER_FAIL },
      ];

      const store = mockStore({ posts: {} });

      return store.dispatch(actions.fetchGroups()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
    });
  });
});
