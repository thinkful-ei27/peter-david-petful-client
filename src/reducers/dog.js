import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR } from '../actions/index'

const initialState = {
  dog: null,
  error: null,
  loading: false
}

export const dogReducer = (state = initialState, action) => {
  if (action.type === FETCH_DOG_REQUEST ) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === FETCH_DOG_SUCCESS) {
    return {
      ...state,
      loading: false,
      dog: action.dog
    }
  } else if (action.type === FETCH_DOG_ERROR) {
    return {
      ...state,
      error: true
    }
  }
  return state;
}