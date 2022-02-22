/* eslint-disable */
import playAudio from './playaudio';

// import { renderAudio } from './renders';
import data from './data'
import { IWord } from './interfases';
import Quest  from './quest'
// import { audio } from './audio';
// import '../assets/rs-school-footer.svg';
// const slot = [...data].filter((w: IWord) => (w.group === 0) && (w.page === 0));
function startAudio(dat: IWord[], group: number, page: number): void {
  const slot = [...dat].filter((w: IWord) => (w.group === group) && (w.page === page));
  console.log('slot length:', slot, slot.length);
  // const i = 2;
  // const di = data[i];
  // renderModal(slot, 0, '#ffff00', 0);
  const quest = new Quest(slot); 
  quest.startAudio(data, 0, 0)
  quest.setEvents();
  // const srca = `assets/${di.audio}`;
  // console.log('srca', srca)
  // PlayAudio(srca);
  // audio.src = 'assets/files/01_0002.mp3';
  // audio.play();
  // const imgt = document.querySelector('.image');
  // (<HTMLImageElement>imgt).src = `assets/${di.image}`;
  // console.log(`word: ${di.word} `, imgt, audio);
}

export default startAudio;
