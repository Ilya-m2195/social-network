const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newTextMessage = action.newMessageBody;
      return {
        ...state,
        dialogArrayData: [...state.dialogArrayData, {
          id: 4,
          message: newTextMessage,
        }]
      }
    default:
      return state;
  }
}

export const AddMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody});

export default messagesReducer;