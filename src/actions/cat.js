import { API_BASE_URL } from '../config';


export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS,
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError= (err) => ({
  type: FETCH_CAT_ERROR,
  error: err
})

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest= () => ({
  type: FETCH_CAT_REQUEST,
})


export const fetchCat = () => (dispatch) => {
  dispatch(fetchCatRequest())
  return(
    fetch(`${API_BASE_URL}api/cats`, {
      method: 'GET',
    })
    .then((res) => res.json())
    .then (res => {
      dispatch(fetchCatSuccess(res))
    })
    .catch(err => {
      dispatch(fetchCatError(err))
    })
  )
}

export const adoptCat = () => (dispatch) => {
  dispatch(fetchCatRequest())
  return(
    fetch(`${API_BASE_URL}api/cats`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then (res => {
      console.log("Catresponse is: ", res)
      dispatch(adoptCatSuccess(res));
    })
    .then(() => {
      dispatch(fetchCat());
    })
    .catch(err => {
      dispatch(fetchCatError(err))
    })
  )
}