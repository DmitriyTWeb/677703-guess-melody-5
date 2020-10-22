const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`,
        genre: `rock`
      }, {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      }, {
        src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3`,
        genre: `jazz`,
      }, {
        src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3`,
        genre: `rock`,
      }
    ],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3`
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`,
      }, {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      }, {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      }
    ]
  }
];
