const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: state.newTextPost,
        likes: 0,
      }
    state.postArrayData.push(newPost);
    state.newTextPost = '';
      return state;
    case CHANGE_TEXT_POST:
    state.newTextPost = action.textPost;
    return state;
    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeTextPostActionCreator = text => ({ type: CHANGE_TEXT_POST, textPost: text });

export default profileReducer;
