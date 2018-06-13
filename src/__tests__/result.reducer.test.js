import resultReducer from '../store/result/reducers';
import * as types from '../store/constants';

describe('result reducer', () => {
  it('should return the initial state', () => {
    expect(resultReducer(undefined, {})).toEqual({
      votesVisible: null,
      active: null,
      _id: '',
      question: '',
      pending: false,
      error: [],
      groupEntry: [
        {
          votes: [],
          comments: [{ _id: '', voteFor: '', commentText: '', likedBy: [] }],
        },
      ],
    });
  });

  it('should handle RESULT_PENDING', () => {
    expect(
      resultReducer(
        {},
        {
          type: types.RESULT_PENDING,
        },
      ),
    ).toEqual({ pending: true });
  });

  it('should handle RESULT_SUCCESS', () => {
    expect(
      resultReducer(
        {},
        {
          type: types.RESULT_SUCCESS,
          payload: { test: 'payload' },
        },
      ),
    ).toEqual({ pending: false, test: 'payload' });
  });

  it('should handle GROUPS_FAIL', () => {
    expect(
      resultReducer(
        { error: [] },
        {
          type: types.RESULT_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'] });
  });

  it('should handle QUESTION_PENDING', () => {
    expect(
      resultReducer(
        {},
        {
          type: types.QUESTION_PENDING,
        },
      ),
    ).toEqual({ pending: true });
  });

  it('should handle QUESTION_SUCCESS', () => {
    expect(
      resultReducer(
        {},
        {
          type: types.QUESTION_SUCCESS,
          payload: { question: 'test payload' },
        },
      ),
    ).toEqual({ pending: false, question: 'test payload' });
  });

  it('should handle QUESTION_FAIL', () => {
    expect(
      resultReducer(
        { error: [] },
        {
          type: types.QUESTION_FAIL,
          payload: 'test payload',
        },
      ),
    ).toEqual({ pending: false, error: ['test payload'] });
  });

  it('should handle TOGGLE_LIKE', () => {
    expect(
      resultReducer(
        {},
        {
          type: types.TOGGLE_LIKE,
          payload: ['test', 'payload'],
        },
      ),
    ).toEqual({ groupEntry: ['test', 'payload'] });
  });

  it('should handle RESULT_ERROR_CLEAR', () => {
    expect(
      resultReducer(
        { error: ['test', 'error'] },
        {
          type: types.RESULT_ERROR_CLEAR,
          payload: 'test payload',
        },
      ),
    ).toEqual({ error: [] });
  });
});
