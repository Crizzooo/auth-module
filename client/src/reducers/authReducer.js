/* Action Types */
const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

/* Action Creators */
export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const removeUser = () => ({ type: REMOVE_USER });

/* Initial State */
const initialState = {
  user: null
};

/* Reducer Function */
export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case SET_USER:
        newState.user = action.user;
        break;

    case REMOVE_USER:
        newState = Object.assign({}, initialState);
        break;

    default:
        return newState;
  }
  return newState;
}
