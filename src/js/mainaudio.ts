/* eslint-disable no-undef */
/* eslint no-console:  */
import PlayAudio from './playaudio';
import data from './data';
import { audio } from './audio';
// import '../assets/rs-school-footer.svg';

function startAudio(): void {
  const i = 1;
  const di = data[i];
  const srca = `assets/${di.audio}`;
  PlayAudio(srca);
  audio.src = 'assets/files/01_0002.mp3';
  const imgt = document.querySelector('.image');
  (<HTMLImageElement>imgt).src = `assets/${di.image}`;
  console.log(`word: ${di.word} `);
}
export default startAudio;
