import { usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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

  newTextPost: '',
  profile: null

}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newTextPost = state.newTextPost;
      return {
        ...state,
        newTextPost: '',
        postArrayData: [...state.postArrayData, {
          message: newTextPost,
          likes: 0,
          id: 2
        }
        ]
      }

    case CHANGE_TEXT_POST: {
      return {
        ...state,
        newTextPost: action.textPost,
      }
    }
case SET_USER_PROFILE: {
  return {
    ...state, profile: action.profile,
  }
}
    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeTextPostActionCreator = text => ({ type: CHANGE_TEXT_POST, textPost: text });
const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const getUserProfile = userId => dispatch => {usersApi.getProfile(userId).then(response => {
  dispatch(setUserProfile(response.data));
})}

export default profileReducer;