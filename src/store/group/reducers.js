import {
  GROUPS_PENDING,
  GROUPS_SUCCESS,
  GROUPS_FAIL,
  GROUPS_ERROR_CLEAR,
  NEW_GROUP_PENDING,
  NEW_GROUP_SUCCESS,
  NEW_GROUP_FAIL,
} from '../constants';

const initialState = {
  data: [],
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
        data: action.payload,
        pending: false,
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

    case NEW_GROUP_PENDING:
      return {
        ...state,
        pending: true,
      };

    case NEW_GROUP_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        pending: false,
      };

    case NEW_GROUP_FAIL:
      return {
        ...state,
        pending: false,
        error: [...state.error, action.payload],
      };

    default:
      return state;
  }
};

export default groupReducer;
