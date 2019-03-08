import { FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR } from '../actions/index'

const initialState = {
  cat: null,
  error: null,
  loading: false
}

export const catReducer = (state = initialState, action) => {
  if (action.type === FETCH_CAT_REQUEST ) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === FETCH_CAT_SUCCESS) {
    return {
      ...state,
      loading: false,
      cat: action.cat
    }
  } else if (action.type === FETCH_CAT_ERROR) {
    return {
      ...state,
      error: true
    }
  }
  return state;
}