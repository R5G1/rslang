/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
import './style-input.scss';
import './index-pages';
import './index-authorisation';
import './index-registration';
// eslint-disable-next-line import/first
// import './index-Api.ts';

const btnAuthorisation = <Element>(
  document.querySelector('.m-p__menu-ul-authorisation')
);

const sectionMainPage = <Element>document.querySelector('.main-page');
const sectionAuthorisation = <Element>document.querySelector('.authorisation');

const btnAuthorisationExit = <any>(
  (<unknown>document.querySelectorAll('.registration__exit'))
);
const btnAuthorisationContent = <Element>(
  document.querySelector('.authorisation__welcome')
);
const btnRegistrationContent = <Element>(
  document.querySelector('.registration__welcome')
);

const sectionAuthorisationContent = <Element>(
  document.querySelector('.authorisation__content')
);
const sectionRegistrationContent = <Element>(
  document.querySelector('.registration__content')
);
//!sectionTeam======================================================
const sectionTeam = <Element>document.querySelector('.team');
const btnTeam = <Element>document.querySelector('.m-p__menu-ul-team');
const btnTeamExit = <Element>document.querySelector('.team__exit');
//!======================================================
btnAuthorisation?.addEventListener('click', () => {
  sectionMainPage.classList.add('hide-pages');
  sectionAuthorisation.classList.remove('hide-pages');
});

btnAuthorisationExit.forEach(
  (element: {
    addEventListener: (arg0: string, arg1: () => void) => void;
  }): void => {
    element?.addEventListener('click', () => {
      sectionAuthorisation.classList.add('hide-pages');
      sectionMainPage.classList.remove('hide-pages');
    });
  },
);

btnRegistrationContent?.addEventListener('click', () => {
  sectionRegistrationContent.classList.remove('hide-authorisation');
  sectionAuthorisationContent.classList.add('hide-authorisation');
});
btnAuthorisationContent?.addEventListener('click', () => {
  sectionAuthorisationContent.classList.remove('hide-authorisation');
  sectionRegistrationContent.classList.add('hide-authorisation');
});
btnTeam?.addEventListener('click', () => {
  sectionMainPage.classList.add('hide-pages');
  sectionTeam.classList.remove('hide-pages');
});
btnTeamExit?.addEventListener('click', () => {
  sectionMainPage.classList.remove('hide-pages');
  sectionTeam.classList.add('hide-pages');
});
// eslint-disable-next-line spaced-comment
//!page======================================================
const sectionHomepage = <Element>document.querySelector('.homepage');
//sprint
const btnSprint = <Element>document.querySelector('.m-p__menu-ul-sprint');
const sectionSprint = <Element>document.querySelector('.sprint');
const btSprintExit = <Element>document.querySelector('.controls__close-btn');
const btSprintExitMenu = <Element>document.querySelector('.modal-result__exit');
//================
const btnAudioChallenge = <Element>(
  document.querySelector('.m-p__menu-ul-audio-challenge')
);
const btnTextbook = <Element>document.querySelector('.m-p__menu-ul-textbook');
const btnStatistics = <Element>(
  document.querySelector('.m-p__menu-ul-statistics')
);

btnSprint?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionSprint.classList.remove('hide');
});
btSprintExit?.addEventListener('click', () => {
  sectionHomepage.classList.remove('hide');
  sectionSprint.classList.add('hide');
});
btSprintExitMenu?.addEventListener('click', () => {
  sectionHomepage.classList.remove('hide');
  sectionSprint.classList.add('hide');
});
btnAudioChallenge?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
});
btnTextbook?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
});
btnStatistics?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
});
