import Const from '../const/const';
import API from '../API/api';
import Utils from '../utils/utils';
import IWord from '../models/IWord';
import IData from '../models/IData';

export default class Gameplay {
  const: Const = new Const();
  api: API = new API();
  utils: Utils = new Utils();

  roundDuration: number = 30;
  currentIndex: number = -1;
  BET: number = 10;
  multiplier: number = 1;
  score: number = -10;
  isRightTranslate: boolean = true;
  streak: number = 0;
  rightAnswersArray: Array<string> = [];
  wrongAnswersArray: Array<string> = [];
  data: IData = {words: [], translates: [], wrongTranslates:[]};
  level: number = 0;
  randomPageNumber: number = 0;
  

  startTimer(timerElement: HTMLSpanElement, seconds: number) {
    timerElement.textContent = String(seconds);
    let remains = seconds;

    let tick: Function;
    setTimeout(
      (tick = () => {
        remains--;
        timerElement.textContent = String(remains);
        if (remains) {
          setTimeout(tick, 1000);
        } else {
          this.endRound();
        }
      }),
      1000
    );
  }

  async getWordsForRound(level: number, page: number) {
    const arrayOfWords: Array<IWord> = await this.api.getWords(level, page);
    const words: Array<string> = arrayOfWords.map((el) => el.word);
    const translates: Array<string> = arrayOfWords.map(
      (el) => el.wordTranslate
    );
    const wrongTranslates = [...translates].reverse();
    return {
      words,
      translates,
      wrongTranslates,
    };
  }

  swithMultiply(streak: number) {
    switch (streak) {
      case 0:
        this.const.multiplierMarks.forEach((el) => (el.style.opacity = '0.1'));
        this.const.multiplyNumber.classList.remove('multiply-two');
        this.const.multiplyNumber.classList.remove('multiply-four');
        this.const.multiplyNumber.classList.remove('multiply-eight');
        this.const.multiplyNumber.classList.add('multiply-one');
        break;
      case 1:
        this.const.multiplierMarks[0].style.opacity = '1';
        break;
      case 2:
        this.const.multiplierMarks[1].style.opacity = '1';
        break;
      case 3:
        this.const.multiplierMarks[2].style.opacity = '1';
        break;
      case 4:
        this.const.multiplierMarks[1].style.opacity = '0.1';
        this.const.multiplierMarks[2].style.opacity = '0.1';
        this.const.multiplyNumber.classList.remove('multiply-one');
        this.const.multiplyNumber.classList.add('multiply-two');
        this.multiplier = 2;
        break;
      case 5:
        this.const.multiplierMarks[1].style.opacity = '1';
        break;
      case 6:
        this.const.multiplierMarks[2].style.opacity = '1';
        break;
      case 7:
        this.const.multiplierMarks[1].style.opacity = '0.1';
        this.const.multiplierMarks[2].style.opacity = '0.1';
        this.const.multiplyNumber.classList.remove('multiply-two');
        this.const.multiplyNumber.classList.add('multiply-four');
        this.multiplier = 4;
        break;
      case 8:
        this.const.multiplierMarks[1].style.opacity = '1';
        break;
      case 9:
        this.const.multiplierMarks[2].style.opacity = '1';
        break;
      case 10:
        this.const.multiplierMarks.forEach((el) => (el.style.opacity = '0'));
        this.const.multiplyNumber.classList.remove('multiply-four');
        this.const.multiplyNumber.classList.add('multiply-eight');
        this.multiplier = 8;
        break;
      default:
        return;
    }
  };

  async nextWord() {
    this.currentIndex++;
    if (this.currentIndex === 20) {
      this.currentIndex = 0;
      this.randomPageNumber++;
      if (this.randomPageNumber === 30) this.randomPageNumber = 0;
      this.data = await this.getWordsForRound(this.level, this.randomPageNumber);
    }
    this.score += this.BET * this.multiplier;
    this.const.score.textContent = String(this.score);
    this.swithMultiply(this.streak);

    this.const.word.textContent = this.data.words[this.currentIndex];
    if (Math.round(Math.random())) {
      this.const.translate.textContent = this.data.translates[this.currentIndex];
      this.isRightTranslate = true;
    } else {
      this.const.translate.textContent =
        this.data.wrongTranslates[this.currentIndex];
      this.isRightTranslate = false;
    }
  };

  onTrueBtn = () => {
    if (this.isRightTranslate) {
      this.streak++;
      this.nextWord();
    } else {
      this.streak = 0;
      this.nextWord();
    }
  };

  onFalseBtn = () => {
    if (!this.isRightTranslate) {
      this.streak++;
      this.nextWord();
    } else {
      this.streak = 0;
      this.nextWord();
    }
  };

  onRightBtn = (evt: KeyboardEvent) => {
    console.log(evt.key);
  }

  onLeftBtn = (evt: KeyboardEvent) => {
    console.log(evt.key);
  }

  endRound() {
    console.log('end');

    this.const.trueBtn.removeEventListener('click', this.onTrueBtn);
    this.const.falseBtn.removeEventListener('click', this.onFalseBtn);
    window.removeEventListener('keydown', this.onRightBtn);
    window.removeEventListener('keydown', this.onLeftBtn);
  }

  async startRound() {
    this.currentIndex = -1;
    this.multiplier = 1;
    this.score = -10;
    this.streak = 0;
    this.rightAnswersArray = [];
    this.wrongAnswersArray = [];

    const levelInputs = [...this.const.levelInputs] as Array<HTMLInputElement>;
    const checkedInput = levelInputs.find(
      (el) => el.checked
    ) as HTMLInputElement;
    this.level = Number(checkedInput.value);

    this.randomPageNumber = this.utils.getRandomNumber(29);
    this.data = await this.getWordsForRound(this.level, this.randomPageNumber);

    this.const.trueBtn.addEventListener('click', this.onTrueBtn);
    this.const.falseBtn.addEventListener('click', this.onFalseBtn);
    window.addEventListener('keydown', this.onRightBtn);
    window.addEventListener('keydown', this.onLeftBtn);
    
    this.startTimer(this.const.gameTimer, this.roundDuration);
    this.nextWord();    
  }
}
