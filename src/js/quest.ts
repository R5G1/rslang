import { IWord } from "./interfases";
import { renderAudio } from "./renders";

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

  constructor(slot: IWord[]) {
    this.slot = slot;
    this.resSlot = [...slot].map((el, idx) => {
      return { sid: el._id, snum: idx, sres: 0, }
    });
    this.onEvent = (e: MouseEvent) => this.disp(e);
    this.click = document.querySelectorAll('.click');
    this.res = document.querySelectorAll('.res');
    this.curQuestion = slot[0]._id;
    this.curIndexSlot = 0;
    this.curLvl = 0;
    this.curIndexQuest = 0;
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

  startAudio(dat: IWord[], group: number, page: number):void {
    renderAudio(this.slot, group, 'green', page);
  }

  disp(evt: MouseEvent) {
    const target = <HTMLElement>evt.target;
    this.unsetEvents();
    if (target.classList.contains('lvl')) {
      const lvls = document.querySelectorAll('.lvl');
      this.curLvl = +[...lvls].map((el, idx) => (el === target) ? String(idx) : '').join('');
      (<HTMLElement>document.querySelector('.audio-wrap')).style.backgroundImage = `url('./assets/img${this.curLvl}.jpg')`;
      +[...lvls].map((el) => el.classList.remove('selected'));
      target.classList.add('selected');
    }
    if (target.classList.contains('answer')) {
      this.resSlot[this.curIndexSlot].sres = target.classList.contains('yes') ? 1 : 0;
      target.classList.remove('yes');
    }
    if (target.classList.contains('start')) {
      renderAudio(this.slot, this.curLvl, 'green', 0);
    }
    if (target.classList.contains('next')) {
      this.curIndexQuest += 1;
      renderAudio(this.slot, this.curLvl, 'green', 0);
    }
    if (target.classList.contains('quit')) {
      //return to main page
    }
    this.setEvents();
  }

}

export default Quest;