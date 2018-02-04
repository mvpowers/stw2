import { FETCH_RESULT } from '../constants';

const voteReducer = (
  state = { modalStatus: false, isFetching: false, vote: { result: '' } },
  action,
) => {
  switch (action.type) {
    case FETCH_RESULT:
      return Object.assign({}, state, {
        ...state,
        vote: action.payload,
      });

    default:
      return state;
  }
};

export default voteReducer;
