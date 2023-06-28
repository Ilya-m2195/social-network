import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let store = {

  _state: {

    profilePage: {

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

    },

    messagePage: {

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
    },

    // friendsPage: {
    //   friendsArrayData: [
    //     {
    //       name: 'Vlad',
    //       avatarLink: 'https://amiel.club/uploads/posts/2022-03/1647576511_1-amiel-club-p-bebi-yoda-kartinki-1.jpg'
    //     },

    //     {
    //       name: 'Dima',
    //       avatarLink: 'https://amiel.club/uploads/posts/2022-03/1647576511_1-amiel-club-p-bebi-yoda-kartinki-1.jpg'
    //     },

    //     {
    //       name: 'Ilya',
    //       avatarLink: 'https://amiel.club/uploads/posts/2022-03/1647576511_1-amiel-club-p-bebi-yoda-kartinki-1.jpg'
    //     },
    //   ]
    // }

  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messagesReducer(this._state.messagePage, action);
    this._state.friends = friendsReducer(this._state.friends, action);

    this._callSubscriber(this._state);
  },
}

export default store;





