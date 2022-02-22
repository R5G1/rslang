/* eslint-disable */
import { IWord } from "./interfases";
import playAudio from "./playaudio";
import { renderAudio, updateAudio, updateSlotResult } from "./renders";
import setQuest from "./slotitems";
class Quest {
  slot: IWord[];
  onEvent: (e: MouseEvent) => void;
  click: NodeListOf<Element>;
  res: NodeListOf<Element>;
  resSlot: { sid: { $oid: string; }; snum: number; sres: number; }[];
  curQuestion: { $oid: string; };
  curIndexSlot: number;
  caseList: string[];
  curLvl: number;
  curIndexQuest: number;
  slotIndexs: number[];
  shuffNum: number[];

  constructor(slot: IWord[]) {
    this.slot = slot;
    this.resSlot = [...slot].map((el, idx) => {
      return { sid: el._id, snum: idx, sres: -1, }
    });
    this.onEvent = (e: MouseEvent) => this.disp(e);
    this.click = document.querySelectorAll('.click');
    this.res = document.querySelectorAll('.res');
    this.curQuestion = slot[0]._id;
    this.slotIndexs = [...slot].map((_, ind) => ind);
    this.curIndexSlot = 0;
    this.curLvl = 0;
    this.curIndexQuest = 0;
    this.shuffNum = setQuest(this.curIndexSlot, this.slotIndexs, 5).reverse().sort(() => Math.random() - 0.5);
    this.caseList = ['answer', 'res', 'lvl', 'start', 'next', 'quit'];
  }

  setEvents() {
    this.click = document.querySelectorAll('.click');
    [...this.click].map((el) => (<HTMLElement>el).addEventListener('click', this.onEvent));
  }

  unsetEvents() {
    this.click = document.querySelectorAll('.click');
    [...this.click].map((el) => (<HTMLElement>el).removeEventListener('click', this.onEvent));
  }

  startAudio(dat: IWord[], group: number, page: number): void {
    renderAudio(this.slot, this.curLvl, 'green', this.curIndexSlot, this.shuffNum);
    this.setEvents();
  }

  disp(evt: MouseEvent) {
    const target = <HTMLElement>evt.target;

    if (target.classList.contains('lvl')) {
      // console.log('target', target)
      const lvls = document.querySelectorAll('.lvl');
      this.curLvl = +[...lvls].map((el, idx) => (el === target) ? String(idx) : '').join('') + 1;
      console.log('lvls, this.curLvl', lvls, this.curLvl);
      (<HTMLElement>document.querySelector('.audio-lvls')).style.backgroundImage = `url('./assets/${this.curLvl}.jpg')`;
      (<HTMLElement>document.querySelector('.quests')).style.backgroundImage = `url('./assets/${this.curLvl}.jpg')`;
      +[...lvls].map((el) => el.classList.remove('selected'));
      target.classList.add('selected');
      (<HTMLElement>document.querySelector('.audio-lvls')).classList.remove('active');
      this.shuffNum = setQuest(this.curIndexSlot, this.slotIndexs, 5).reverse().sort(() => Math.random() - 0.5);
      console.log('this.shuffNum', this.shuffNum);
      updateAudio(this.slot, this.curLvl, 'green', this.curIndexSlot, this.shuffNum);
      (<HTMLElement>document.querySelector('.quests')).classList.add('active');
      const srca = `assets/${this.slot[this.curIndexSlot].audio}`;
      playAudio(srca);
    }

    if (target.classList.contains('answer')) {
      this.resSlot[this.curIndexSlot].sres = target.classList.contains('yes') ? 1 : 0;
      target.classList.remove('yes');
      if (this.curIndexSlot === (this.slot.length-1)){
        const ressl = [...this.resSlot].map((el) => el.sres);
        console.log('ressl', ressl)
        updateSlotResult(ressl);
      } else {
        this.curIndexSlot += 1;
        this.shuffNum = setQuest(this.curIndexSlot, this.slotIndexs, 5).reverse().sort(() => Math.random() - 0.5);
        console.log('this.shuffNum', this.shuffNum);
        updateAudio(this.slot, this.curLvl, 'green', this.curIndexSlot, this.shuffNum);
        (<HTMLElement>document.querySelector('.quests')).classList.add('active');
        const srca = `assets/${this.slot[this.curIndexSlot].audio}`;
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