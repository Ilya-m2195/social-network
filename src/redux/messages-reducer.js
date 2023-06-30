const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

let initialState = {

  userArrayData: [
    {
      id: 1,
      name: 'Ivan',
    },
    {
      id: 2,
      name: 'Lina',
    },
    {
      id: 3,
      name: 'Peter',
    },
    {
      id: 4,
      name: 'Boba',
    },
  ],

  dialogArrayData: [
    {
      message: 'Hello!!!',
      id: 0,
    },
    {
      message: 'How are you?',
      id: 1,
    },
    {
      message: 'There are you?',
      id: 2,
    },
    {
      message: 'Go to the gym?',
      id: 3,
    },
  ],
  newTextMessage: ''
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newTextMessage = state.newTextMessage;
      return {
        ...state,
        newTextMessage: '',
        dialogArrayData: [...state.dialogArrayData, {
          id: 4,
          message: newTextMessage,
        }]

      }

    case CHANGE_TEXT_MESSAGE:
      return {
        ...state,
        newTextMessage: action.messageText,
      }
    default:
      return state;
  }
}

export const AddMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const changeTextMessageActionCreator = messageText => ({ type: CHANGE_TEXT_MESSAGE, messageText: messageText });

export default messagesReducer;