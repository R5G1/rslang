/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/comma-dangle */
import { btnStatistics } from '../page-input/index-pages';
import { btnNavigationStatistics } from '../page-input/index-pages';
import store from './store';

export interface store {
  user: string;
  data: string;
  group: number;
  page: number;
  word: string;
  num: string;
  res: number;
}

const generalAnalysisNumber = document.querySelector(
  '.general__analysis-number-text'
) as HTMLDivElement;
const generalAnalysisPercent = document.querySelector(
  '.general__analysis-percent-text'
) as HTMLDivElement;

const statisticsSprintNumber = document.querySelector(
  '.statistics__game-sprint-number-text'
) as HTMLDivElement;
const statisticsSprintPercent = document.querySelector(
  '.statistics__game-sprint-percent-text'
) as HTMLDivElement;

const statisticsAudioNumber = document.querySelector(
  '.statistics__game-audio-challenge-number-text'
) as HTMLDivElement;
const statisticsAudioPercent = document.querySelector(
  '.statistics__game-audio-challenge-percent-text'
) as HTMLDivElement;

const numberZero = 0 as number;
let numberSumSprint = 0 as number;
let numberPercentSprint = 0 as number;
let numberSumAudio = 0 as number;
let numberPercentAudio = 0 as number;

store.forEach((item, index, array) => {
  if (store[index].nameGame === 'sprint') {
    numberPercentSprint++;
    if (store[index].res === 1) {
      numberSumSprint++;
    }
  }
  if (store[index].nameGame === 'audio') {
    numberPercentAudio++;
    if (store[index].res === 1) {
      numberSumAudio++;
    }
  }
});

function scoreSprintNumber(number: number, Percent: number) {
  statisticsSprintNumber.innerHTML = `${number}`;
  statisticsSprintPercent.innerHTML = `${scoreStatisticsPercent(number, Percent)}`;
}
function scoreAudioNumber(number: number, Percent: number) {
  statisticsAudioNumber.innerHTML = `${number}`;
  statisticsAudioPercent.innerHTML = `${scoreStatisticsPercent(number, Percent)}`;
}
function scoreStatisticsPercent(number: number, Percent: number) {
  const scoreSum = ((number / Percent) * 100).toFixed(1);
  return scoreSum;
}

function mainStatisticsPercent() {
  const sumNumber = numberSumSprint + numberSumAudio;
  const sumPercent = numberPercentSprint + numberPercentAudio;
  generalAnalysisNumber.innerHTML = `${sumNumber}`;
  generalAnalysisPercent.innerHTML = `${scoreStatisticsPercent(sumNumber, sumPercent)}`;
}

function scoreResult() {
  scoreSprintNumber(numberSumSprint, numberPercentSprint);
  scoreAudioNumber(numberSumAudio, numberPercentAudio);
  mainStatisticsPercent();
}

btnStatistics.addEventListener('click', () => {
  if (localStorage.getItem('loginUser')) {
    scoreResult();
  } else {
    scoreReset();
  }
});

btnNavigationStatistics.addEventListener('click', () => {
  if (localStorage.getItem('loginUser')) {
    scoreResult();
  } else {
    scoreReset();
  }
});

function scoreReset() {
  generalAnalysisNumber.innerHTML = `${numberZero}`;
  generalAnalysisPercent.innerHTML = `${numberZero}`;
  statisticsSprintNumber.innerHTML = `${numberZero}`;
  statisticsSprintPercent.innerHTML = `${numberZero}`;
  statisticsAudioNumber.innerHTML = `${numberZero}`;
  statisticsAudioPercent.innerHTML = `${numberZero}`;
}
