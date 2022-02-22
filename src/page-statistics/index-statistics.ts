/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/comma-dangle */
import { btnStatistics } from '../page-input/index-pages';
import { btnNavigationStatistics } from '../page-input/index-pages';

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

function scoreResult() {
  scoreStatisticsNumber();
  scoreStatisticsPercent();
}

const numberZero = 0;
const number = 21;
const numberPercent = 66;
function scoreStatisticsNumber() {
  generalAnalysisNumber.innerHTML = `${number}`;
}
function scoreStatisticsPercent() {
  generalAnalysisPercent.innerHTML = `${(
    (number / numberPercent)
    * 100
  ).toFixed(1)}`;
}

function scoreSprintNumber() {}
function scoreSprintPercent() {}

function scoreAudioNumber() {}
function scoreAudioPercent() {}

function scoreReset() {
  generalAnalysisNumber.innerHTML = `${numberZero}`;
  generalAnalysisPercent.innerHTML = `${numberZero}`;
}
