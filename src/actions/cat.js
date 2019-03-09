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
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      res.json()
    })
    .then (res => {
      return dispatch(fetchCatSuccess(res))
    })
    .catch(err => {
      return dispatch(fetchCatError(err))
    })
  )
}

export const adoptCat = () => (dispatch) => {
  dispatch(fetchCatRequest())
  return(
    fetch(`${API_BASE_URL}api/cats`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .then (res => {
      console.log("Cat response is: ", res)
      return dispatch(adoptCatSuccess(res));
    })
     .then(() => {
      return dispatch(fetchCat());
     })
    .catch(err => {
      return dispatch(fetchCatError(err))
    })
  )
}