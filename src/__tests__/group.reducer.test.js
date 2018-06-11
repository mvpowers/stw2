/* eslint-disable no-undef */
import groupReducer from '../store/group/reducers';
import {
  GROUPS_PENDING,
  GROUPS_SUCCESS,
  GROUPS_FAIL,
  GROUPS_ERROR_CLEAR,
  NEW_GROUP_PENDING,
  NEW_GROUP_SUCCESS,
  NEW_GROUP_FAIL,
  LEAVE_GROUP_PENDING,
  LEAVE_GROUP_SUCCESS,
  LEAVE_GROUP_FAIL,
  ADMIN_GROUPS_PENDING,
  ADMIN_GROUPS_SUCCESS,
  ADMIN_GROUPS_FAIL,
  SINGLE_GROUP_PENDING,
  SINGLE_GROUP_SUCCESS,
  SINGLE_GROUP_FAIL,
  ADD_OPTION_PENDING,
  ADD_OPTION_SUCCESS,
  ADD_OPTION_FAIL,
  REMOVE_OPTION_PENDING,
  REMOVE_OPTION_SUCCESS,
  REMOVE_OPTION_FAIL,
  REMOVE_MEMBER_PENDING,
  REMOVE_MEMBER_SUCCESS,
  REMOVE_MEMBER_FAIL,
  JOIN_GROUP_PENDING,
  JOIN_GROUP_SUCCESS,
  JOIN_GROUP_FAIL,
  APPROVE_MEMBER_PENDING,
  APPROVE_MEMBER_SUCCESS,
  APPROVE_MEMBER_FAIL,
  DECLINE_MEMBER_PENDING,
  DECLINE_MEMBER_SUCCESS,
  DECLINE_MEMBER_FAIL,
} from '../store/constants';

describe('group reducer', () => {
  it('should return the initial state', () => {
    expect(groupReducer(undefined, {})).toEqual({
      data: [],
      error: [],
      adminGroups: [],
      editAdminGroup: {
        options: [],
      },
      successMessage: '',
    });
  });

  it('should handle GROUPS_PENDING', () => {
    expect(
      groupReducer(
        {},
        {
          type: GROUPS_PENDING,
        },
      ),
    ).toEqual({ pending: true });
  });

  it('should handle GROUPS_SUCCESS', () => {
    expect(
      groupReducer(
        {},
        {
          type: GROUPS_SUCCESS,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, data: 'test payload' });
  });

  it('should handle GROUPS_FAIL', () => {
    expect(
      groupReducer(
        { error: [] },
        {
          type: GROUPS_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'] });
  });

  it('should handle GROUPS_ERROR_CLEAR', () => {
    expect(
      groupReducer(
        { error: ['initial error'], successMessage: 'initial success message' },
        {
          type: GROUPS_ERROR_CLEAR,
        },
      ),
    ).toEqual({ error: [], successMessage: '' });
  });

  it('should handle NEW_GROUP_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: NEW_GROUP_PENDING,
        },
      ),
    ).toEqual({ error: [], pending: true, successMessage: '' });
  });

  it('should handle NEW_GROUP_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: NEW_GROUP_SUCCESS,
          payload: { name: 'testName', groupId: '555' },
        },
      ),
    ).toEqual({
      pending: false,
      data: [{ groupId: '555', name: 'testName' }],
      successMessage:
        'Group "testName" created successfully. Send Group ID 555 to your friends to join.',
    });
  });

  it('should handle NEW_GROUP_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: NEW_GROUP_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle LEAVE_GROUP_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: LEAVE_GROUP_PENDING,
        },
      ),
    ).toEqual({ error: [], pending: true, successMessage: '' });
  });

  it('should handle LEAVE_GROUP_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: LEAVE_GROUP_SUCCESS,
          payload: { groups: 'testGroup', deleted: 'testDeleted' },
        },
      ),
    ).toEqual({
      pending: false,
      data: 'testGroup',
      successMessage:
        'Successfully removed from group "testDeleted". I hope your friends don\'t mind. That\'s messed up.',
    });
  });

  it('should handle LEAVE_GROUP_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: LEAVE_GROUP_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle ADMIN_GROUPS_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: ADMIN_GROUPS_PENDING,
        },
      ),
    ).toEqual({
      adminGroups: [],
      error: [],
      pending: true,
      successMessage: '',
    });
  });

  it('should handle ADMIN_GROUPS_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: ADMIN_GROUPS_SUCCESS,
          payload: 'testPayload',
        },
      ),
    ).toEqual({
      adminGroups: 'testPayload',
      pending: false,
      data: [],
    });
  });

  it('should handle ADMIN_GROUPS_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: ADMIN_GROUPS_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle SINGLE_GROUP_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: SINGLE_GROUP_PENDING,
        },
      ),
    ).toEqual({
      error: [],
      pending: true,
      successMessage: '',
      editAdminGroup: {
        options: [],
      },
    });
  });

  it('should handle SINGLE_GROUP_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: SINGLE_GROUP_SUCCESS,
          payload: 'testPayload',
        },
      ),
    ).toEqual({
      editAdminGroup: 'testPayload',
      pending: false,
      data: [],
    });
  });

  it('should handle SINGLE_GROUP_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: SINGLE_GROUP_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle ADD_OPTION_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: ADD_OPTION_PENDING,
        },
      ),
    ).toEqual({
      error: [],
      pending: true,
      successMessage: '',
    });
  });

  it('should handle ADD_OPTION_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: ADD_OPTION_SUCCESS,
          payload: { options: 'testPayload' },
        },
      ),
    ).toEqual({
      editAdminGroup: { options: 'testPayload' },
      pending: false,
      data: [],
      successMessage: 'Option successfully added',
    });
  });

  it('should handle ADD_OPTION_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: ADD_OPTION_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle REMOVE_OPTION_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: REMOVE_OPTION_PENDING,
        },
      ),
    ).toEqual({
      error: [],
      pending: true,
      successMessage: '',
    });
  });

  it('should handle REMOVE_OPTION_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: REMOVE_OPTION_SUCCESS,
          payload: { options: 'testPayload' },
        },
      ),
    ).toEqual({
      editAdminGroup: { options: 'testPayload' },
      pending: false,
      data: [],
      successMessage: 'Option successfully removed',
    });
  });

  it('should handle REMOVE_OPTION_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: REMOVE_OPTION_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle REMOVE_MEMBER_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: REMOVE_MEMBER_PENDING,
        },
      ),
    ).toEqual({
      error: [],
      pending: true,
      successMessage: '',
    });
  });

  it('should handle REMOVE_MEMBER_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: REMOVE_MEMBER_SUCCESS,
          payload: { members: 'testPayload' },
        },
      ),
    ).toEqual({
      editAdminGroup: { members: 'testPayload' },
      pending: false,
      data: [],
      successMessage: 'Member successfully removed',
    });
  });

  it('should handle REMOVE_MEMBER_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: REMOVE_MEMBER_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle JOIN_GROUP_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: JOIN_GROUP_PENDING,
        },
      ),
    ).toEqual({
      error: [],
      pending: true,
      successMessage: '',
    });
  });

  it('should handle JOIN_GROUP_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: JOIN_GROUP_SUCCESS,
          payload: 'testPayload',
        },
      ),
    ).toEqual({
      pending: false,
      data: ['testPayload'],
      successMessage: 'Request sent successfully and awaiting approval.',
    });
  });

  it('should handle JOIN_GROUP_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: JOIN_GROUP_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle APPROVE_MEMBER_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: APPROVE_MEMBER_PENDING,
        },
      ),
    ).toEqual({
      error: [],
      pending: true,
      successMessage: '',
    });
  });

  it('should handle APPROVE_MEMBER_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: APPROVE_MEMBER_SUCCESS,
          payload: { members: 'testPayload' },
        },
      ),
    ).toEqual({
      pending: false,
      data: [],
      editAdminGroup: {
        members: 'testPayload',
      },
      successMessage: 'Member successfully added',
    });
  });

  it('should handle APPROVE_MEMBER_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: APPROVE_MEMBER_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });

  it('should handle DECLINE_MEMBER_PENDING', () => {
    expect(
      groupReducer(
        {
          error: ['initial error'],
          successMessage: 'initial success message',
          pending: false,
        },
        {
          type: DECLINE_MEMBER_PENDING,
        },
      ),
    ).toEqual({
      error: [],
      pending: true,
      successMessage: '',
    });
  });

  it('should handle DECLINE_MEMBER_SUCCESS', () => {
    expect(
      groupReducer(
        { data: [] },
        {
          type: DECLINE_MEMBER_SUCCESS,
          payload: { members: 'testPayload' },
        },
      ),
    ).toEqual({
      pending: false,
      data: [],
      editAdminGroup: {
        members: 'testPayload',
      },
      successMessage: 'Member successfully declined',
    });
  });

  it('should handle DECLINE_MEMBER_FAIL', () => {
    expect(
      groupReducer(
        { error: [], successMessage: 'test success message' },
        {
          type: DECLINE_MEMBER_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'], successMessage: '' });
  });
});
