import {dogReducer} from './dog'
import {catReducer} from './cat'
import { combineReducers } from 'redux';

export const reducers = combineReducers({dogReducer, catReducer});
