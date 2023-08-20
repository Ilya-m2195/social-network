import { stopSubmit } from "redux-form";
import { authApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payLoad,
      }

    default:
      return state;
  }
}

const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payLoad: { id, email, login, isAuth } });

export const getAuthUserData = () => dispatch => {
  authApi.me().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
}

export const login = (email, password, rememberMe) => dispatch => {
  authApi.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      // dispatch(stopSubmit('login', { _error: 'Email or password is wrong' }));
      console.log(response.data.messages[0])
      let message = response.data.messages[0].length > 0 ? response.data.messages : 'Email or password is wrong';
      dispatch(stopSubmit('login', {_error: message }));
    }
  });
}

export const logout = () => dispatch => {
  authApi.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
}
export default authReducer;