const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'

const messagesReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message: state.newTextMessage,
        likes: 0,
      }
      state.dialogArrayData.push(newMessage);
      state.newTextMessage = '';
       return state;
    case CHANGE_TEXT_MESSAGE:
      state.newTextMessage = action.messageText;
       return state;
    default:
      return state;
  }
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeTextMessageActionCreator = messageText => ({type: CHANGE_TEXT_MESSAGE, messageText: messageText});

export default messagesReducer;