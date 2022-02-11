import { IWord } from "./interfases";

class Quest {
  slot: IWord[];
  onEvent: (e: MouseEvent) => void;
  click: NodeListOf<Element>;
  res: NodeListOf<Element>;
  resSlot: { sid: { $oid: string; }; snum: number; sres: number; }[];
  curQuestion: { $oid: string; };
  curIndexSlot: number;
  caseList: string[];

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
    this.caseList = ['answer', 'res'];
  }
  setEvents() {
    [...this.click].map((el) => (<HTMLElement>el).addEventListener('click', this.onEvent));
  }

  disp(evt: MouseEvent) {
    const target = <HTMLElement>evt.target;
    if (target.classList.contains('answer')){
      this.resSlot[this.curIndexSlot].sres = target.classList.contains('yes')?1:0;
      target.classList.remove('yes');
    }
  }
}

export default Quest;