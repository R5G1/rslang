/* eslint-disable */
import { IWord } from './interfases';
import playAudio from './playaudio';
import { renderAudio, updateAudio, updateSlotResult } from './renders';
import setQuest from './slotitems';
import API from '../tbook/api';
import sortWords from '../tbook/sortwords';

class Quest {
  slot: IWord[];
  onEvent: (e: MouseEvent) => void;

  click: NodeListOf<Element>;

  res: NodeListOf<Element>;
  resSlot: { sid:  string; snum: number; sres: number; }[];
  curQuestion: number;
  curIndexSlot: number;
  caseList: string[];
  curLvl: number;
  curIndexQuest: number;
  slotIndexs: number[];
  shuffNum: number[];
  base: string;

  constructor(slot: IWord[]) {
    this.slot = slot;
    this.resSlot = [...this.slot].map((el, idx) => {
      return { sid: el.word, snum: idx, sres: -1, }
    });
    this.onEvent = (e: MouseEvent) => this.disp(e);
    this.click = document.querySelectorAll('.click');
    this.res = document.querySelectorAll('.res');
    this.curQuestion = 0;
    this.slotIndexs = '0'.repeat(20).split('').map((_,idx)=>idx);
    this.curIndexSlot = 0;
    this.curLvl = 0;
    this.curIndexQuest = 0;
    this.shuffNum = setQuest(this.curIndexSlot, this.slotIndexs, 5).reverse().sort(() => Math.random() - 0.5);
    this.caseList = ['answer', 'res', 'lvl', 'start', 'next', 'quit'];
    this.base = 'https://rss-lang-task.herokuapp.com/';
  }

  setEvents() {
    this.click = document.querySelectorAll('.click');
    [...this.click].map((el) => (<HTMLElement>el).addEventListener('click', this.onEvent));
  }

  unsetEvents() {
    this.click = document.querySelectorAll('.click');
    [...this.click].map((el) => (<HTMLElement>el).removeEventListener('click', this.onEvent));
  }

  startAudio(group: number, page: number): void {
    console.log('a am start Audio')
    const api = new API();
    const prom = api.getWords(group, page);
    prom.then((value) => {
      const words = value;
      this.slot = sortWords(words);
      // this.slot = slot;
      this.resSlot = [...this.slot].map((el, idx) => {
        return { sid: el.word, snum: idx, sres: -1, }
      });
      console.log('a am start Audio', words);
      this.shuffNum = setQuest(0, this.slotIndexs, 5).reverse().sort(() => Math.random() - 0.5);
      renderAudio(sortWords(words), group, 'green', this.curIndexSlot, this.shuffNum);
      this.setEvents();
    });
  }

  disp(evt: MouseEvent) {
    const target = <HTMLElement>evt.target;

    if (target.classList.contains('lvl')) {
      // console.log('target', target)
      const lvls = document.querySelectorAll('.lvl');
      this.curLvl = +[...lvls].map((el, idx) => (el === target) ? String(idx) : '').join('') + 1;
      // console.log('lvls, this.curLvl', lvls, this.curLvl);
      (<HTMLElement>document.querySelector('.audio-lvls')).style.backgroundImage = `url('../src/assets/${this.curLvl}.jpg')`;
      (<HTMLElement>document.querySelector('.quests')).style.backgroundImage = `url('../src/assets/${this.curLvl}.jpg')`;
      +[...lvls].map((el) => el.classList.remove('selected'));
      target.classList.add('selected');
      (<HTMLElement>document.querySelector('.audio-lvls')).classList.remove('active');
      this.shuffNum = setQuest(this.curIndexSlot, this.slotIndexs, 5).reverse().sort(() => Math.random() - 0.5);
      console.log('this.shuffNum', this.shuffNum);
      updateAudio(this.slot, this.curLvl, 'green', this.curIndexSlot, this.shuffNum);
      (<HTMLElement>document.querySelector('.quests')).classList.add('active');
      const srca = `${this.base}${this.slot[this.curIndexSlot].audio}`;
      playAudio(srca);
    }

    if (target.classList.contains('answer')) {
      this.resSlot[this.curIndexSlot].sres = target.classList.contains('yes') ? 1 : 0;
      target.classList.remove('yes');
      if (this.curIndexSlot === (this.slot.length - 1)) {
        const ressl = [...this.resSlot].map((el) => el.sres);
        console.log('ressl', ressl)
        updateSlotResult(ressl);
      } else {
        this.curIndexSlot += 1;
        this.shuffNum = setQuest(this.curIndexSlot, this.slotIndexs, 5).reverse().sort(() => Math.random() - 0.5);
        console.log('this.shuffNum', this.shuffNum);
        updateAudio(this.slot, this.curLvl, 'green', this.curIndexSlot, this.shuffNum);
        (<HTMLElement>document.querySelector('.quests')).classList.add('active');
        const srca = `${this.base}${this.slot[this.curIndexSlot].audio}`;
        playAudio(srca);
        console.log('this.resSlot', this.resSlot);
      }
    }
    if (target.classList.contains('start')) {
      renderAudio(this.slot, this.curLvl, 'green', 0, this.shuffNum);
    }
    if (target.classList.contains('next')) {
      this.curIndexQuest += 1;
      updateAudio(this.slot, this.curLvl, 'green', this.curIndexQuest, this.shuffNum);
    }
    if (target.classList.contains('quit')) {
    }
    this.unsetEvents();
    this.setEvents();
  }

}

export default Quest;