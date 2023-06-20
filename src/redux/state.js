import { rerenderTree } from "../render";

let state = {

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
    ]

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
        massage: 'Hello!!!',
        id: 0,
      },
      {
        massage: 'How are you?',
        id: 1,
      },
      {
        massage: 'There are you?',
        id: 2,
      },
      {
        massage: 'Go to the gym?',
        id: 3,
      },
    ]

  },

  friends: [
    {
      name: 'Vlad',
      avatarLink: 'https://amiel.club/uploads/posts/2022-03/1647576511_1-amiel-club-p-bebi-yoda-kartinki-1.jpg'
    },

    {
      name: 'Dima',
      avatarLink: 'https://amiel.club/uploads/posts/2022-03/1647576511_1-amiel-club-p-bebi-yoda-kartinki-1.jpg'
    },

    {
      name: 'Ilya',
      avatarLink: 'https://amiel.club/uploads/posts/2022-03/1647576511_1-amiel-club-p-bebi-yoda-kartinki-1.jpg'
    },
  ]
}

export let addPost = str => {
  let newPost = {
    message: str,
    likes: 12,
  }
  state.profilePage.postArrayData.push(newPost);
  rerenderTree(state);
}

export default state;





