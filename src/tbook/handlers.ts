/* eslint-disable */
import API from './api';
import sortWords from './sortwords';
// import sortWords from '../js/sortwords';
import { updRender } from './rendbooks';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const pag = (trg: HTMLElement) => {
  const pageNum = (Number(trg.textContent) - 1) % 30;
  const groupNum = Math.floor((Number(trg.textContent) - 1) / 30);
  // console.log('I Am Pag!', pageNum, groupNum )
  const api = new API();
  const prom = api.getWords(groupNum, pageNum);
  prom.then((value) => {
    const words = value;
    updRender(sortWords(words));
  });
};
