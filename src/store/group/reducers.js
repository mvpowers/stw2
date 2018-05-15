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
} from '../constants';

const initialState = {
  data: [],
  error: [],
  adminGroups: [],
  editAdminGroup: {
    options: [],
  },
  successMessage: '',
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
        successMessage: '',
      };

    case NEW_GROUP_PENDING:
      return {
        ...state,
        pending: true,
        error: [],
        successMessage: '',
      };

    case NEW_GROUP_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        pending: false,
        successMessage: `Group "${
          action.payload.name
        }" created successfully. Send Group ID ${
          action.payload.groupId
        } to your friends to join.`,
      };

    case NEW_GROUP_FAIL:
      return {
        ...state,
        pending: false,
        error: [...state.error, action.payload],
        successMessage: '',
      };

    case LEAVE_GROUP_PENDING:
      return {
        ...state,
        pending: true,
        error: [],
        successMessage: '',
      };

    case LEAVE_GROUP_SUCCESS:
      return {
        ...state,
        data: action.payload.groups,
        pending: false,
        successMessage: `Successfully removed from group "${
          action.payload.deleted
        }". I hope your friends don't mind. That's messed up.`,
      };

    case LEAVE_GROUP_FAIL:
      return {
        ...state,
        pending: false,
        error: [...state.error, action.payload],
        successMessage: '',
      };

    case ADMIN_GROUPS_PENDING:
      return {
        ...state,
        pending: true,
        error: [],
        successMessage: '',
        adminGroups: [],
      };

    case ADMIN_GROUPS_SUCCESS:
      return {
        ...state,
        pending: false,
        adminGroups: action.payload,
      };

    case ADMIN_GROUPS_FAIL:
      return {
        ...state,
        pending: false,
        error: [...state.error, action.payload],
      };

    case SINGLE_GROUP_PENDING:
      return {
        ...state,
        pending: true,
        error: [],
        successMessage: '',
        editAdminGroup: {
          options: [],
        },
      };

    case SINGLE_GROUP_SUCCESS:
      return {
        ...state,
        pending: false,
        editAdminGroup: action.payload,
      };

    case SINGLE_GROUP_FAIL:
      return {
        ...state,
        pending: false,
        error: [...state.error, action.payload],
      };

    case ADD_OPTION_PENDING:
      return {
        ...state,
        pending: true,
        error: [],
        successMessage: '',
      };

    case ADD_OPTION_SUCCESS:
      return {
        ...state,
        pending: false,
        successMessage: 'Option successfully added',
        editAdminGroup: {
          ...state.editAdminGroup,
          options: action.payload.options,
        },
      };

    case ADD_OPTION_FAIL:
      return {
        ...state,
        pending: false,
        successMessage: '',
        error: [...state.error, action.payload],
      };

    case REMOVE_OPTION_PENDING:
      return {
        ...state,
        pending: true,
        error: [],
        successMessage: '',
      };

    case REMOVE_OPTION_SUCCESS:
      return {
        ...state,
        pending: false,
        successMessage: 'Option successfully removed',
        editAdminGroup: {
          ...state.editAdminGroup,
          options: action.payload.options,
        },
      };

    case REMOVE_OPTION_FAIL:
      return {
        ...state,
        pending: false,
        successMessage: '',
        error: [...state.error, action.payload],
      };

    default:
      return state;
  }
};

export default groupReducer;
