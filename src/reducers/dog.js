import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR } from '../actions/index'


const initialState = {
  dog: {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
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