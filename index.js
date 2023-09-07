const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [r, o, y, g, b, indg, v] = colors;

const [color1, color2, color3, color4, color5, color6, color7] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit',
};

const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy',
};

const { song2, song4, nestedJob: kermitJob, nestedPartner: kermitPartner } = nestedMuppet.album.theMuppetMovie;

const [bessie, dolly, babe, little] = ['cow', 'sheep', 'pig', 'chicken'];
const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];
const [sound1, sound2, sound3, sound4, sound5] = ['moo', 'neigh', 'baa', 'oink', 'cluck'];