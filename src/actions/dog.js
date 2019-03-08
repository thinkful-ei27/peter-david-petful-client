
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS,
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError= (err) => ({
  type: FETCH_DOG_ERROR,
  error: err
})

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest= () => ({
  type: FETCH_DOG_REQUEST,
})


export const fetchDog = () => (dispatch) => {
  dispatch(fetchDogRequest())
  return(
    fetch('https://petful-backend.herokuapp.com/api/dogs', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then ( res => {
      dispatch(fetchDogSuccess(res))
      dispatch(fetchDog())
    })
    .catch(err => {
      dispatch(fetchDogError(err))
    })
  )
}

export const adoptDog = () => (dispatch) => {
  dispatch(fetchDogRequest())
  return(
    fetch('https://petful-backend.herokuapp.com/api/dogs', {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then ( res => {
      dispatch(adoptDogSuccess(res))
    })
    .catch(err => {
      dispatch(fetchDogError(err))
    })
  )
}