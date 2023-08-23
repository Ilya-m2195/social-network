import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {

  postArrayData: [
    {
      message: 'hi',
      likes: 13,
      id: 0,
    },
    {
      message: 'This is my second post!',
      likes: 14,
      id: 1,
    },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newTextPost = action.newTextPost;
      return {
        ...state,
        postArrayData: [...state.postArrayData, {
          message: newTextPost,
          likes: 0,
          id: 2
        }
        ]
      }

    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state, status: action.status,
      }
    }
    default: return state;
  }
}

export const addPostActionCreator = newTextPost => ({ type: ADD_POST, newTextPost });
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
const setUserStatus = status => ({ type: SET_STATUS, status });
export const getUserProfile = userId => async dispatch => {
  const response = await usersApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getUserStatus = userId => async dispatch => {
  const response = await profileApi.getStatus(userId)
    dispatch(setUserStatus(response.data));
}
export const updateStatus = status => async dispatch => {
  const response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
}

export default profileReducer;
