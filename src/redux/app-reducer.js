import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED = 'SET_USER_DATA';

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => dispatch => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
}

export default appReducer;