/* eslint-disable */
import Const from '../const/const';
import API from '../API/api';
import Utils from '../utils/utils';
import IWord from '../models/IWord';
import IData from '../models/IData';

export default class Gameplay {
  const: Const = new Const();

  api: API = new API();

  utils: Utils = new Utils();

  roundDuration = 30;

  currentIndex = -1;

  BET = 10;

  multiplier = 1;

  score = 0;

  isRightTranslate = true;

  streak = 0;

  rightAnswersArray: Array<IWord> = [];

  wrongAnswersArray: Array<IWord> = [];

  data: IData = {
    arrayOfWords: [],
    words: [],
    translates: [],
    wrongTranslates: [],
  };

  level = 0;

  randomPageNumber = 0;

  trueSound: HTMLAudioElement = new Audio('https://rss-lang-task.herokuapp.com/files/true.mp3');

  falseSound: HTMLAudioElement = new Audio('https://rss-lang-task.herokuapp.com/files/false.mp3');

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  startTimer(timerElement: HTMLSpanElement, seconds: number) {
    timerElement.textContent = String(seconds);
    let remains = seconds;

    let tick: { (): void; (): void; };
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
      1000,
    );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async getWordsForRound(level: number, page: number) {
    const arrayOfWords: Array<IWord> = await this.api.getWords(level, page);
    const words: Array<string> = arrayOfWords.map((el) => el.word);
    const translates: Array<string> = arrayOfWords.map((el) => el.wordTranslate);
    const wrongTranslates = [...translates].reverse();
    return {
      arrayOfWords,
      words,
      translates,
      wrongTranslates,
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  swithMultiply(streak: number) {
    switch (streak) {
      case 0:
        // eslint-disable-next-line no-return-assign
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
        this.multiplier = 2;
        break;
      case 4:
        this.const.multiplierMarks[1].style.opacity = '0.1';
        this.const.multiplierMarks[2].style.opacity = '0.1';
        this.const.multiplyNumber.classList.remove('multiply-one');
        this.const.multiplyNumber.classList.add('multiply-two');
        break;
      case 5:
        this.const.multiplierMarks[1].style.opacity = '1';
        break;
      case 6:
        this.const.multiplierMarks[2].style.opacity = '1';
        this.multiplier = 4;
        break;
      case 7:
        this.const.multiplierMarks[1].style.opacity = '0.1';
        this.const.multiplierMarks[2].style.opacity = '0.1';
        this.const.multiplyNumber.classList.remove('multiply-two');
        this.const.multiplyNumber.classList.add('multiply-four');
        break;
      case 8:
        this.const.multiplierMarks[1].style.opacity = '1';
        break;
      case 9:
        this.const.multiplierMarks[2].style.opacity = '1';
        this.multiplier = 8;
        break;
      case 10:
        // eslint-disable-next-line no-return-assign
        this.const.multiplierMarks.forEach((el) => (el.style.opacity = '0'));
        this.const.multiplyNumber.classList.remove('multiply-four');
        this.const.multiplyNumber.classList.add('multiply-eight');
        break;
      default:
        break;
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async nextWord() {
    this.currentIndex++;
    if (this.currentIndex === 20) {
      this.currentIndex = 0;
      this.randomPageNumber++;
      if (this.randomPageNumber === 30) this.randomPageNumber = 0;
      this.data = await this.getWordsForRound(
        this.level,
        this.randomPageNumber,
      );
    }
    this.const.score.textContent = String(this.score);
    this.swithMultiply(this.streak);

    this.const.word.textContent = this.data.words[this.currentIndex];
    if (Math.round(Math.random())) {
      this.const.translate.textContent = this.data.translates[this.currentIndex];
      this.isRightTranslate = true;
    } else {
      this.const.translate.textContent = this.data.wrongTranslates[this.currentIndex];
      this.isRightTranslate = false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onRightAnswer() {
    this.streak++;
    this.rightAnswersArray.push(this.data.arrayOfWords[this.currentIndex]);
    this.score += this.BET * this.multiplier;
    this.const.resultYesMark.classList.add('result_active');
    setTimeout(() => this.const.resultYesMark.classList.remove('result_active'), 200);
    this.trueSound.currentTime = 0;
    this.trueSound.play();
    this.nextWord();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onWrongAnswer() {
    this.streak = 0;
    this.wrongAnswersArray.push(this.data.arrayOfWords[this.currentIndex]);
    this.const.resultNoMark.classList.add('result_active');
    setTimeout(() => this.const.resultNoMark.classList.remove('result_active'), 200);
    this.falseSound.currentTime = 0;
    this.falseSound.play();
    this.nextWord();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onTrueBtn = () => {
    if (this.isRightTranslate) {
      this.onRightAnswer();
    } else {
      this.onWrongAnswer();
    }
    this.const.trueBtn.classList.add('buttons__item_active');
    setTimeout(() => this.const.trueBtn.classList.remove('buttons__item_active'), 500);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onFalseBtn = () => {
    if (!this.isRightTranslate) {
      this.onRightAnswer();
    } else {
      this.onWrongAnswer();
    }
    this.const.falseBtn.classList.add('buttons__item_active');
    setTimeout(() => this.const.falseBtn.classList.remove('buttons__item_active'), 500);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onRightBtn = (evt: KeyboardEvent) => {
    if (evt.key === 'ArrowRight') {
      const event = new Event('click');
      this.const.trueBtn.dispatchEvent(event);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onLeftBtn = (evt: KeyboardEvent) => {
    if (evt.key === 'ArrowLeft') {
      const event = new Event('click');
      this.const.falseBtn.dispatchEvent(event);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  generateResult(fragment: DocumentFragment, item: IWord) {
    const cloneTemp = this.const.listItemTemplate.content.cloneNode(true) as HTMLDivElement;

    const itemSound = cloneTemp.querySelector('.item__sound') as HTMLButtonElement;
    const itemWord = cloneTemp.querySelector('.text__word') as HTMLSpanElement;
    const itemTranslate = cloneTemp.querySelector('.text__translate') as HTMLSpanElement;

    const sound = new Audio(`${this.api.server}${item.audio}`) as HTMLAudioElement;

    itemSound.addEventListener('click', () => {
      sound.play();
    });
    itemWord.textContent = item.word;
    itemTranslate.textContent = item.wordTranslate;

    fragment.appendChild(cloneTemp);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  endRound() {
    this.const.modalResult.classList.remove('hide');
    this.const.modalGameResult.textContent = String(this.score);

    const numberQuestion: number = this.rightAnswersArray.length + this.wrongAnswersArray.length;
    const succesPercent: number = Math.round((this.rightAnswersArray.length / numberQuestion) * 100);

    const TRANSITION = 3000;
    const timeForTick: number = TRANSITION / succesPercent;

    let tick: { (): void; (): void; };

    let numberOfPercent = -1;
    setTimeout(
      (tick = () => {
        numberOfPercent++;
        this.const.modalBarPercent.textContent = `${numberOfPercent}%`;
        this.const.modalBarPercent.style.left = `${numberOfPercent}%`;
        this.const.modalBarFill.style.width = `${numberOfPercent}%`;
        if (numberOfPercent < succesPercent) {
          setTimeout(tick, timeForTick);
        } else {
          this.const.modalBarPercent.textContent = `${succesPercent}%`;
          this.const.modalBarPercent.style.left = `${succesPercent}%`;
          this.const.modalBarFill.style.width = `${succesPercent}%`;
        }
      }),
      timeForTick,
    );

    this.const.modalMistakes.textContent = `${this.wrongAnswersArray.length}`;
    this.const.modalCorrects.textContent = `${this.rightAnswersArray.length}`;

    const mistakesFragment = document.createDocumentFragment() as DocumentFragment;
    const correctsFragment = document.createDocumentFragment() as DocumentFragment;

    this.wrongAnswersArray.forEach((el) => this.generateResult(mistakesFragment, el));
    this.rightAnswersArray.forEach((el) => this.generateResult(correctsFragment, el));

    if(!(<any>window).stor) (<any>window).stor = [];
    if(!(<any>window).stor.trueSprint) (<any>window).stor.trueSprint = [];
    if(!(<any>window).stor.falseSprint) (<any>window).stor.falseSprint = [];

    (<any>window).stor.trueSprint = [...(<any>window).stor.trueSprint, ...this.rightAnswersArray];
    (<any>window).stor.falseSprint = [...(<any>window).stor.falseSprint, ...this.wrongAnswersArray];

    this.const.mistakesList.innerHTML = '';
    this.const.correctsList.innerHTML = '';
    this.const.mistakesList.appendChild(mistakesFragment);
    this.const.correctsList.appendChild(correctsFragment);

    this.const.trueBtn.removeEventListener('click', this.onTrueBtn);
    this.const.falseBtn.removeEventListener('click', this.onFalseBtn);
    window.removeEventListener('keydown', this.onRightBtn);
    window.removeEventListener('keydown', this.onLeftBtn);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async startRound() {
    this.currentIndex = -1;
    this.multiplier = 1;
    this.score = 0;
    this.streak = 0;
    this.rightAnswersArray = [];
    this.wrongAnswersArray = [];

    this.const.welcomeSection.classList.add('hide');
    this.const.loaderSection.classList.remove('hide');

    const levelInputs = [...this.const.levelInputs] as Array<HTMLInputElement>;
    const checkedInput = levelInputs.find((el) => el.checked) as HTMLInputElement;
    this.level = Number(checkedInput.value);

    this.randomPageNumber = this.utils.getRandomNumber(29);
    this.data = await this.getWordsForRound(this.level, this.randomPageNumber);

    this.const.loaderSection.classList.add('hide');
    this.const.gameSection.classList.remove('hide');

    this.const.trueBtn.addEventListener('click', this.onTrueBtn);
    this.const.falseBtn.addEventListener('click', this.onFalseBtn);
    window.addEventListener('keydown', this.onRightBtn);
    window.addEventListener('keydown', this.onLeftBtn);

    this.startTimer(this.const.gameTimer, this.roundDuration);
    this.nextWord();
  }
}
