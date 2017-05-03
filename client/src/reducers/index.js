/* Dependencies */
const {combineReducers} = require('redux');

/* Import Other Reducers */
import dummyReducer from './dummyReducer.js';
import authReducer from './authReducer.js';


/* Combine & Export Reducers to Store */
const mainReducer = combineReducers({
  dummyReducer,
  auth: authReducer
});

module.exports = mainReducer;
