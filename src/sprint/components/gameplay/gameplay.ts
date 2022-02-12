import Const from "../const/const";
import API from "../API/api";
import Utils from "../utils/utils";
import IWord from "../models/IWord";

export default class Gameplay {
  const: Const = new Const();
  api: API = new API();
  utils: Utils = new Utils();

  startTimer(timerElement: HTMLSpanElement, seconds: number) {
    timerElement.textContent = String(seconds);
    let remains = seconds;

    let tick: Function;
    setTimeout(tick = () => {
      remains--;
      timerElement.textContent = String(remains);
      if (remains) {
        setTimeout(tick, 1000)
      } else {
        this.endRound();
      }
    }, 1000);
  }

  async getWordsForRound(level: number, page: number) {
    const arrayOfWords: Array<IWord> = await this.api.getWords(level, page);
    const words: Array<string> = arrayOfWords.map(el => el.word);
    const translates: Array<string> = arrayOfWords.map(el => el.wordTranslate);
    const wrongTranslates = [...translates].reverse();
    return {
      words,
      translates,
      wrongTranslates
    }
  }

  endRound() {
    console.log('end');
  }

  async startRound() {
    const levelInputs = [
      ...this.const.levelInputs,
    ] as Array<HTMLInputElement>;
    const checkedInput = levelInputs.find(
      (el) => el.checked
    ) as HTMLInputElement;
    const LEVEL: number = Number(checkedInput.value);

    let randomPageNumber: number = this.utils.getRandomNumber(5);
    let DATA = await this.getWordsForRound(LEVEL, randomPageNumber);

    let currentIndex: number = -1;
    let bet: number = 10;
    let score: number = -10;
    
    let isRightTranslate: boolean;
    let streak: number = 0;
    const nextWord = () => {
      currentIndex++
      this.const.word.textContent = DATA.words[currentIndex];
      if(Math.round(Math.random())) {
        this.const.translate.textContent = DATA.translates[currentIndex];
        isRightTranslate = true;
      } else {
        this.const.translate.textContent = DATA.wrongTranslates[currentIndex];
        isRightTranslate = false;
      }
      score += bet;
      this.const.score.textContent = String(score);

    }

  }
}
