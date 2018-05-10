import {
  GROUPS_PENDING,
  GROUPS_SUCCESS,
  GROUPS_FAIL,
  GROUPS_ERROR_CLEAR,
} from '../constants';

const initialState = {
  options: [
    {
      _id: '',
      name: '',
      description: '',
    },
  ],
  error: [],
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case GROUPS_PENDING:
      return {
        ...state,
        pending: true,
      };

    case GROUPS_SUCCESS:
      return {
        ...state,
        pending: false,
        options: action.payload,
      };

    case GROUPS_FAIL:
      return {
        ...state,
        pending: false,
        error: [...state.error, action.payload],
      };
    case GROUPS_ERROR_CLEAR:
      return {
        ...state,
        error: [],
      };

    default:
      return state;
  }
};

export default groupReducer;
