import {combineReducers} from 'redux';

import counter from './counter';
import register from './register';
import movie from './movie';

export default combineReducers({
  counter,
  register,
  movie,
});
