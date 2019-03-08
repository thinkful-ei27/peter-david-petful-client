
const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})


const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError= (err) => ({
  type: FETCH_CAT_ERROR,
  error: err
})

const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest= () => ({
  type: FETCH_CAT_REQUEST,
})


export const fetchCat = () => (dispatch) => {
  dispatch(fetchCatRequest())
  return(
    fetch('https://petful-backend.herokuapp.com/api/cats', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then ( res => {
      dispatch(fetchCatSuccess(res))
    })
    .catch(err => {
      dispatch(fetchCatError(err))
    })
  )
}