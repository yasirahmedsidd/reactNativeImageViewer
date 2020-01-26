import {combineReducers} from 'redux';
import countReducer from './countReducer';
import userReducer from './userReducer';
export default combineReducers({
  count: countReducer,
  user: userReducer,
});
