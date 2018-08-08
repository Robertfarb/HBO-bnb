export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as ApiUtil from '../util/session_api_util';

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = (user) => dispatch => {
  return ApiUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const logout = () => dispatch => {
  return ApiUtil.logout().then(user => {
    return dispatch(receiveCurrentUser(null));
  });
};

export const signup = (user) => dispatch => {
  return ApiUtil.signup(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};
