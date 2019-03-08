import dogReducer from './dog'
import catReducer from './cat'
import { combineReducers } from 'redux';

export default combineReducers({dogReducer, catReducer})