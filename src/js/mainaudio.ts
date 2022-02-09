/* eslint-disable no-undef */
/* eslint no-console:  */
import PlayAudio from './playaudio';
import data from './data';

const i = 1;
const di = data[i];
const srca = `assets/${di.audio}`;
PlayAudio(srca);
console.log(`word: ${di.word} `);
