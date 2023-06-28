let initialState = {
  friendsArrayData: [
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

const friendsReducer = (state = initialState, action) => {
  return state;
}

export default friendsReducer;