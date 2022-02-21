/* eslint-disable */
import { IWord } from './interfases';

const base = 'https://rss-lang-task.herokuapp.com/';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const renderItem = (item: IWord, n: number) => {
  const { word, image, audio, audioMeaning, audioExample,
    textMeaning, textExample, transcription, wordTranslate, textMeaningTranslate, textExampleTranslate,
  } = item;
  const html = `
        <div class="word" >
        <h2>${String(n)}. ${word}</h2>
        <p>${wordTranslate}</p>
        <p>${transcription}</p>        
        <audio controls src="${`${base}${audio}`}" ></audio>
        <img src="${`${base}${image} `}" alt="${word}" >
        <p>${textMeaning}</p>
        <p>${textMeaningTranslate}</p>
        <audio controls src="${`${base}${audioMeaning}`}" ></audio>
        <p>${textExample}</p>
        <p>${textExampleTranslate}</p>      
        <audio controls src="${`${base}${audioExample}`}" ></audio>
      </div>
  `;
  return html;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const renderItems = (items: IWord[]) => {
  const res = [...items].map((el, idx) => renderItem(el, idx + 1)).join('');
  return `<div class="words" >${res}</div>`;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const rpagin = () => {
  const pArr = '0'.repeat(181).split('').map((_, idx) => idx);
  const pkey = (i: number) => `<div class="pag-page"><span class="click" data-foo="pag">${String(i)}</span></div>`;
  const pkeys = pArr.map((_, idx) => {
    if ((idx % 30 === 0) && (idx > 0)) {
      return `</div><div class="pag-group" data-group="${idx / 30}">${pkey(idx + 1)}`;
    }

    return pkey(idx + 1);
  }).join('');
  const html = `
    <div class="pagination" >
      <div class="pag-group" data-group="0">
      ${pkeys}
      </div>
    </div>`;
  return html;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const renderBook = (itms: IWord[]) => {
  const html = `
  ${rpagin()}
  ${renderItems(itms)}
  `;

  const root = document.createElement('div');
  root.classList.add('container-tbook');
  root.innerHTML = html;
  (<HTMLElement>(document.querySelector)<HTMLElement>('.textbook')).appendChild(root);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const updRender = (itms: IWord[]) => {
  const dwords = (document.querySelector)<HTMLElement>('.words');
  const res = [...itms].map((el, idx) => renderItem(el, idx + 1)).join('');
  (<HTMLElement>dwords).innerHTML = res;
};
