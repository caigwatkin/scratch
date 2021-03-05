import {
  TMP_READ_FAILURE,
  TMP_READ_PENDING,
  TMP_READ_SUCCESS,
} from '../actions/tmp'

let DEFAULT_STATE = {}

const tmp = (
  state = {
    ...DEFAULT_STATE,
    tmpReadFailure: false,
    tmpReadPending: false,
    tmpReadSuccess: false,
  },
  action
) => {
  switch (action.type) {
    case TMP_READ_FAILURE: {
      return {
        ...state,
        tmpReadFailure: true,
        tmpReadPending: false,
      }
    }
    case TMP_READ_PENDING: {
      return {
        ...state,
        tmpReadFailure: false,
        tmpReadPending: true,
        tmpReadSuccess: false,
      }
    }
    case TMP_READ_SUCCESS: {
      return {
        ...state,
        tmpReadPending: false,
        tmpReadSuccess: true,
      }
    }

    default:
      return state
  }
}

export default tmp
