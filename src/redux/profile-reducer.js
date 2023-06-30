const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

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

  newTextPost: ''

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

    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeTextPostActionCreator = text => ({ type: CHANGE_TEXT_POST, textPost: text });

export default profileReducer;
