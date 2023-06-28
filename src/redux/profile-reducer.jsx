const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

let initialState = {

  postArrayData: [
    {
      message: 'hi',
      likes: 13,
    },
    {
      message: 'This is my second post!',
      likes: 14,
    },
  ],

  newTextPost: ''

}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: state.newTextPost,
        likes: 0,
      }
      let stateCopy = { ...state }
      stateCopy.postArrayData = [...state.postArrayData];
      stateCopy.postArrayData.push(newPost);
      stateCopy.newTextPost = '';
      return stateCopy;
    }

    case CHANGE_TEXT_POST: {
      let stateCopy = { ...state }
      stateCopy.newTextPost = action.textPost;
      return stateCopy;
    }

    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeTextPostActionCreator = text => ({ type: CHANGE_TEXT_POST, textPost: text });

export default profileReducer;
