/* eslint-disable */
import { IWord } from './interfases';
import './audio.css';

export const SpeakerColor = (lvl: number, color: string) => `
      <div class="speaker" id="speaker-${lvl}">
        ${`
          <svg id="speaksvg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
            <path fill="${color}"
              d="M64 18.244c-0.474 0.285-1.581 1.148-2.462 1.918-1.944 1.7-5.731 4.975-10.831 9.366-2.099 1.807-4.48 3.865-5.292 4.574s-3.6 3.124-6.195 5.37l-4.718 4.082-28.262 0.139-0.891 0.611c-0.49 0.336-1.147 1.056-1.459 1.6l-0.567 0.989v35.446l0.616 1.1c0.376 0.671 1 1.317 1.6 1.658l0.984 0.557 27.429 0.008 0.932 0.8c0.512 0.44 0.987 0.856 1.055 0.924 0.13 0.132 6.748 5.84 7.989 6.891 0.4 0.338 1.231 1.065 1.846 1.615s2.725 2.376 4.688 4.060c1.963 1.683 3.625 3.117 3.693 3.186 0.13 0.132 1.69 1.484 6.521 5.653 4.016 3.466 5.63 3.967 7.875 2.447 2.023-1.37 1.85 2.983 1.85-46.481v-43.889l-0.551-0.98c-1.124-2-3.941-2.791-5.849-1.643zM102.625 18.777c-2.242 1.511-2.55 4.209-0.767 6.723 3.863 5.447 5.018 7.303 6.942 11.151 10.562 21.13 8.325 47.401-5.629 66.095-3.062 4.102-3.069 6.967-0.021 8.522 3.198 1.631 5.517-0.249 10.512-8.52 15.466-25.61 13.755-57.919-4.332-81.783-2.087-2.753-4.633-3.584-6.705-2.188zM91.454 30.1c-2.829 1.602-2.962 4.046-0.421 7.77 11.034 16.178 11.216 37.406 0.46 53.575-2.745 4.126-2.816 6.426-0.25 8.085 3.403 2.199 5.926 0.296 10.224-7.715 8.571-15.974 8.904-35.587 0.879-51.815-4.509-9.118-7.489-11.827-10.892-9.9zM79.272 42.289c-2.855 1.405-3.005 3.72-0.55 8.475 0.96 1.859 1.87 3.797 2.023 4.308 2.712 9.059 1.95 16.929-2.449 25.286-1.752 3.329-1.555 5.447 0.639 6.865 2.99 1.933 5.24 0.743 7.71-4.076 5.969-11.649 5.896-25.047-0.2-36.624-2.301-4.37-4.39-5.604-7.172-4.234z">
            </path>
          </svg>
`}      </div>
`;

export const renderSlot = (words: IWord[]) => `
  <ul class="modal-slot">
    ${[...words].map((word: IWord, idx) => `
      <li ><span class="res click" id="numslot-${idx}">${word.word}</span><span class="result">?</span></li>
    `).join('')}
  </ul>
`;

export const updateSlotResult = (results: number[]) => {
  const modalResults = document.querySelectorAll('.modal-slot result');
  [...modalResults].map((el, idx) => el.textContent = (results[idx] = 1) ? '+' : '-');
};

export const renderLvls = `
      <div class="audio-lvls active">
        <div class="lvls-list">
          <div class="lvl click" >1</div>
          <div class="lvl click" >2</div>
          <div class="lvl click" >3</div>
          <div class="lvl click" >4</div>
          <div class="lvl click" >5</div>
          <div class="lvl click" >6</div>
        </div>
      </div>
`;

export const answ = (num: number, answers: number[], words: string[]) => `
      <div class="audio-answers" id="id-${num}">
         ${[...answers].map(
  (el: number, idx: number) => `
        <div class="answer ${idx === num ? 'yes' : ''} click">${words[idx]}</div>  
      `).join('')}
        <div class="next click ">next</div>  
      </div>
`;

export const renderAudio = (slot: IWord[], lvl: number, color: string, idx: number, chunk: number[]) => {
  console.log('renderAudio', slot, lvl, color, idx, chunk);
  const words = slot.filter((_, ind) => chunk.includes(ind)).map((el: IWord) => el.wordTranslate);
  const html = `
  <section class="audio-call" id="audiocall">
    <h2 class="audio-title">Audio Call</h2>
    <div class="audio-wrap">   
      <div class="audio-lvls active">
        <div class="lvls-list">
          <div class="lvl click" >1</div>
          <div class="lvl click" >2</div>
          <div class="lvl click" >3</div>
          <div class="lvl click" >4</div>
          <div class="lvl click" >5</div>
          <div class="lvl click" >6</div>
        </div>
      </div>
      <div class="quests">
        <div class="quest">
          <div class="speaker click">
          ${SpeakerColor(lvl, color)};
          </div>
          <img src="" alt="">
        ${answ(idx, chunk, words)}
        </div>
        <div class="modal">
        ${renderSlot(slot)}
        </div>
      </div>
    </div>
  </section>
`;
  const imgCop = require(`../assets/${lvl}.jpg`);
  const root = document.createElement('div');
  root.classList.add('container');
  root.classList.add('container-audio');
  root.innerHTML = html;
  (<HTMLElement>root.querySelector('.audio-lvls')).style.background = `url(${imgCop}) center/cover  no-repeat `;
  // (<HTMLElement>root.querySelector('.audio-lvls')).style.backgroundImage = `url(${imgCop})`;
  // (<HTMLElement>root.querySelector('.quests')).style.backgroundImage = `url('../../public//${lvl}.jpg')`;
  (<HTMLElement>root.querySelector('.quests')).style.background = `url(${imgCop}) center/cover  no-repeat `;
  document.body.appendChild(root);
}

export const updateAudio = (slot: IWord[], lvl: number, color: string, idx: number, chunk: number[]) => {
  const words = slot.filter((_, ind) => chunk.includes(ind)).map((el: IWord) => el.wordTranslate);
  // console.log('idx', idx, 'words', words);
  const html = `
        <div class="quest">
          <div class="speaker click">
          ${SpeakerColor(lvl, color)};
          </div>
          <img src="" alt="">
        ${answ(idx, chunk, words)}
        </div>
        <div class="modal">
        ${renderSlot(slot)}
        </div>
`;
  const imgCop = require(`../assets/${lvl}.jpg`);
  const questsDom = (<HTMLElement>document.querySelector('.quests'));
  const audioWrap = (<HTMLElement>document.querySelector('.audio-wrap'));
  // questsDom.replaceChild ;
  const quests = document.createElement('div');
  quests.style.backgroundImage = `url(${imgCop}) center/cover  no-repeat `;
  quests.classList.add('quests');
  quests.classList.add('active');
  quests.innerHTML = html;
  (<Element>audioWrap).removeChild(questsDom);
  audioWrap.appendChild(quests);
}