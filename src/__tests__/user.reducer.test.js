import userReducer from '../store/user/reducers';
import * as types from '../store/constants';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      pending: false,
      id: '',
      name: '',
      email: '',
      phone: '',
      admin: '',
      token: '',
      error: [],
      newRegister: false,
      signupError: [],
      tokenResetMessage: '',
      resetError: [],
      userUpdateMessage: '',
      userUpdateError: [],
    });
  });

  it('should handle TOKEN_PENDING', () => {
    expect(
      userReducer(
        {
          test: 'payload',
          error: ['test error'],
          pending: false,
          newRegister: true,
        },
        {
          type: types.TOKEN_PENDING,
        },
      ),
    ).toEqual({
      test: 'payload',
      error: [],
      pending: true,
      newRegister: false,
    });
  });

  it('should handle TOKEN_FAIL', () => {
    expect(
      userReducer(
        { error: ['test'] },
        {
          type: types.TOKEN_FAIL,
          payload: { response: { data: 'error' } },
        },
      ),
    ).toEqual({ pending: false, error: ['test', 'error'] });
  });

  it('should handle SIGNUP_PENDING', () => {
    expect(
      userReducer(
        { test: 'payload', pending: false, signupError: 'payload' },
        {
          type: types.SIGNUP_PENDING,
        },
      ),
    ).toEqual({ test: 'payload', pending: true, signupError: [] });
  });

  it('should handle SIGNUP_SUCCESS', () => {
    expect(
      userReducer(
        {
          test: 'payload',
          pending: true,
          newRegister: false,
          error: ['test'],
          signupError: ['test'],
        },
        {
          type: types.SIGNUP_SUCCESS,
          payload: { test: 'payload' },
        },
      ),
    ).toEqual({
      test: 'payload',
      pending: false,
      newRegister: true,
      error: [],
      signupError: [],
    });
  });

  it('should handle SIGNUP_FAIL', () => {
    expect(
      userReducer(
        {
          test: 'payload',
          pending: true,
          newRegister: false,
          error: ['test'],
          signupError: ['test'],
        },
        {
          type: types.SIGNUP_FAIL,
          payload: { errors: { testError: { msg: 'msg test' } } },
        },
      ),
    ).toEqual({
      pending: false,
      error: ['test'],
      signupError: ['test', 'msg test'],
      newRegister: false,
      test: 'payload',
    });
  });

  it('should handle UPDATE_PASSWORD_PENDING', () => {
    expect(
      userReducer(
        { pending: false, resetError: ['test'], tokenResetMessage: 'test' },
        {
          type: types.UPDATE_PASSWORD_PENDING,
        },
      ),
    ).toEqual({ pending: true, resetError: [], tokenResetMessage: '' });
  });

  it('should handle UPDATE_PASSWORD_SUCCESS', () => {
    expect(
      userReducer(
        {
          test: 'payload',
          pending: true,
          resetError: ['test'],
          tokenResetMessage: 'test',
        },
        {
          type: types.UPDATE_PASSWORD_SUCCESS,
        },
      ),
    ).toEqual({
      test: 'payload',
      pending: false,
      resetError: [],
      newRegister: true,
      tokenResetMessage: 'test',
    });
  });

  it('should handle UPDATE_PASSWORD_FAIL', () => {
    expect(
      userReducer(
        { test: 'payload', pending: true, resetError: ['test'] },
        {
          type: types.UPDATE_PASSWORD_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({
      test: 'payload',
      pending: false,
      resetError: ['test', 'test payload'],
    });
  });

  it('should handle UPDATE_USER_PENDING', () => {
    expect(
      userReducer(
        { test: 'payload' },
        {
          type: types.UPDATE_USER_PENDING,
        },
      ),
    ).toEqual({
      pending: true,
      test: 'payload',
      userUpdateMessage: '',
      userUpdateError: [],
    });
  });

  it('should handle UPDATE_USER_SUCCESS', () => {
    expect(
      userReducer(
        {},
        {
          type: types.UPDATE_USER_SUCCESS,
          payload: {
            message: 'message',
            name: 'name',
            phone: 'phone',
            email: 'email',
          },
        },
      ),
    ).toEqual({
      pending: false,
      userUpdateMessage: 'message',
      name: 'name',
      phone: 'phone',
      email: 'email',
    });
  });

  it('should handle UPDATE_USER_FAIL', () => {
    expect(
      userReducer(
        { userUpdateError: ['test'], pending: true },
        {
          type: types.UPDATE_USER_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, userUpdateError: ['test', 'test payload'] });
  });

  it('should handle USER_ERROR_CLEAR', () => {
    expect(
      userReducer(
        {
          test: 'payload',
          error: ['error'],
          signupError: ['signupError'],
          userUpdateError: ['userUpdateError'],
          userUpdateMessage: 'userUpdateMessage',
          newRegister: true,
        },
        {
          type: types.USER_ERROR_CLEAR,
        },
      ),
    ).toEqual({
      test: 'payload',
      error: [],
      signupError: [],
      userUpdateError: [],
      userUpdateMessage: '',
      newRegister: false,
    });
  });
});
