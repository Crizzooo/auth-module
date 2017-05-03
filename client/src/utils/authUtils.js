const axios = require('axios');
import { setUser, removeUser } from '../reducers/authReducer.js';

export const loginDispatch = ({ email, password}) => dispatch => {
  console.log('received email: ', email);
  console.log('received password: ', password);
  //TODO: send password through encryption and get back salt
  axios.put('/api/auth/me', {email, password})
  .then(resToData)
  .then( (user) => {
    console.log('received user from server: ', user);
    dispatch(setUser(user));
  })
  .catch( (err) => {
    console.error('Unable to Login', err);
  })
};

export const signup = ({ email, password}) => dispatch => {
  console.log('received email: ', email);
  console.log('received password: ', password);
  //TODO: send password through encryption and get back salt
  axios.post('/api/auth/me', {email, password})
  .then(resToData)
  .then( (user) => {
    console.log('received user from server: ', user);
    dispatch(setUser(user));
  })
  .catch( (err) => {
    console.error('Unable to Signup, That Email might be taken: ', err);
  })
};

export const logout = (self) => dispatch => {
  axios.delete('/api/auth/me')
  .then( () => {
    console.log('logged out successfully');
    dispatch(removeUser());
    console.log('received context: ', self);
  })
  .catch( (err) => {
    console.log('error logging out', err);
  })
}

let resToData = (res) => res.data;
module.exports = { loginDispatch, signup, logout };
