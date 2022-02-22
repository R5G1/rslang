/* eslint-disable */
import IWord from './IWord';

export default interface IData {
  arrayOfWords: Array<IWord>;
  words: Array<string>;
  translates: Array<string>;
  wrongTranslates: Array<string>;
}
