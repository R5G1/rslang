import { IWord } from "../js/interfases";

const base = 'https://rss-lang-task.herokuapp.com/';

export const renderItem = (item: IWord, n: number) => {
  const { word, image, audio, audioMeaning, audioExample, textMeaning, textExample, transcription, wordTranslate, textMeaningTranslate, textExampleTranslate, } = item;
  const html = `
        <div class="word" >
        <h2>${String(n)}. ${word}</h2>
        <p>${wordTranslate}</p>
        <p>${transcription}</p>        
        <audio controls src="${`${base}${audio}`}" ></audio>
        <img src="${`${base}${image} `}" alt="${word}" >
        <p>${textMeaning}</p>
        <p>${textMeaningTranslate}</p>
        <audio controls src="${`${base}${audioMeaning} `}" ></audio>
        <p>${textExample}</p>
        <p>${textExampleTranslate}</p>      
        <audio controls src="${`${base}${audioExample}`}" ></audio>
      </div>
  `;
  return html;
};

export const renderItems = (items: IWord[]) => {
  const res = [...items].map((el, idx) => renderItem(el, idx + 1)).join('');
  return `<div class="words" >${res}</div>`;
}

export const rpagin = () => {
  const pArr = '0'.repeat(180).split('').map((_, idx) => idx);
  const pkey = (i: number) => {
      return `<div class="pag-page"><span class="click" data-foo="pag">${String(i)}</span></div>`;
  }
  const pkeys = pArr.map((_, idx) => {
    if ((idx % 30 === 0) && (idx > 0)){
      return `</div><div class="pag-group" data-group="${idx / 30}">${pkey(idx + 1)}`
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
}

export const render = (itms: IWord[]) => {
  const html = `
    <div class="container-tbook" >
  ${rpagin()}
  ${renderItems(itms)}
    </div>
  `;

  const root = document.createElement('section');
  root.classList.add('tbook');
  root.innerHTML = html;
  document.body.appendChild(root);
}

export const updRender = (itms: IWord[]) => {
  const dwords = (document.querySelector)<HTMLElement>('.words');
  const res = [...itms].map((el, idx) => renderItem(el, idx + 1)).join('');
  (<HTMLElement>dwords).innerHTML = res;
}