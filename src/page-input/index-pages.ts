/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable spaced-comment */
import TBook from '../tbook/tbook';

const sectionHomepage = <Element>document.querySelector('.homepage');

const sectionHeder = <Element>document.querySelector('.main-page');
const sectionAuthorisation = <Element>document.querySelector('.authorisation');
const sectionSprint = <Element>document.querySelector('.sprint');
const sectionAudioChallenge = <Element>(
  document.querySelector('.audio-challenge')
);
const sectionTextbook = <Element>document.querySelector('.textbook');
const sectionStatistics = <Element>document.querySelector('.statistics');
const sectionTeam = <Element>document.querySelector('.team');

//!btnAuthorisation======================================================

const btnAuthorisation = <Element>(
  document.querySelector('.m-p__menu-ul-authorisation')
);

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

//!btnSprint======================================================

const btnSprint = <Element>document.querySelector('.m-p__menu-ul-sprint');
const btSprintExit = <Element>document.querySelector('.controls__close-btn');
const btSprintExitMenu = <Element>document.querySelector('.modal-result__exit');

//!bntPage-menu======================================================

const btnAudioChallenge = <Element>(
  document.querySelector('.m-p__menu-ul-audio-challenge')
);
const btnTextbook = <Element>document.querySelector('.m-p__menu-ul-textbook');
const btnStatistics = <Element>(
  document.querySelector('.m-p__menu-ul-statistics')
);

//!btnSectionTeam======================================================
const btnTeam = <Element>document.querySelector('.m-p__menu-ul-team');
const btnTeamExit = <Element>document.querySelector('.team__exit');

//!sectionNavigation=============================================================
const sectionNavigation = <Element>document.querySelector('.navigation');
const btnNavigationHeder = <Element>(
  document.querySelector('.navigation__menu-ul-authorisation')
);
const btnNavigationSprint = <Element>(
  document.querySelector('.navigation__menu-ul-sprint')
);
const btnNavigationAudioChallenge = <Element>(
  document.querySelector('.navigation__menu-ul-audio-challenge')
);
const btnNavigationTextbook = <Element>(
  document.querySelector('.navigation__menu-ul-textbook')
);
const btnNavigationStatistics = <Element>(
  document.querySelector('.navigation__menu-ul-statistics')
);
const btnNavigationTeam = <Element>(
  document.querySelector('.navigation__menu-ul-team')
);

//?end const======================================================

//!Authorisation======================================================

btnAuthorisation?.addEventListener('click', () => {
  sectionHeder.classList.add('hide-pages');
  sectionAuthorisation.classList.remove('hide-pages');
});

btnAuthorisationExit.forEach(
  (element: {
    addEventListener: (arg0: string, arg1: () => void) => void;
  }): void => {
    element?.addEventListener('click', () => {
      sectionAuthorisation.classList.add('hide-pages');
      sectionHeder.classList.remove('hide-pages');
      sectionNavigation.classList.add('hide');
    });
  }
);
btnRegistrationContent?.addEventListener('click', () => {
  sectionRegistrationContent.classList.remove('hide-authorisation');
  sectionAuthorisationContent.classList.add('hide-authorisation');
});
btnAuthorisationContent?.addEventListener('click', () => {
  sectionAuthorisationContent.classList.remove('hide-authorisation');
  sectionRegistrationContent.classList.add('hide-authorisation');
});

//!sprint======================================================

btnSprint?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionSprint.classList.remove('hide');
  sectionNavigation.classList.remove('hide');
});
btSprintExit?.addEventListener('click', () => {
  sectionHomepage.classList.remove('hide');
  sectionSprint.classList.add('hide');
  sectionNavigation.classList.add('hide');
});

//!AudioChallenge======================================================

btnAudioChallenge?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionNavigation.classList.remove('hide');
  sectionAudioChallenge.classList.remove('hide');
  // const slot = [...data].filter((w: IWord) => (w.group === 0) && (w.page === 0));
  // const quest = new Quest(slot);
  // quest.startAudio(slot, 0, 0);
});

//!Textbook======================================================
const preloader: any = document.getElementById('preloader');

function preloaderPage() {
  preloader.classList.add('hide-preloader');
  setInterval(() => {
    preloader.classList.add('preloader-hidden');
  }, 3000);
}

btnTextbook?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionNavigation.classList.remove('hide');
  sectionTextbook.classList.remove('hide');
  preloader.classList.remove('preloader-hidden');
  preloaderPage();
  const ntb = new TBook(1, 1);
  ntb.startTBook();
});

//!Statistics======================================================

btnStatistics?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionNavigation.classList.remove('hide');
  sectionStatistics.classList.remove('hide');
  preloader.classList.remove('preloader-hidden');
  preloaderPage();
});

//!btnSectionTeam======================================================
btnTeam?.addEventListener('click', () => {
  sectionHeder.classList.add('hide-pages');
  sectionTeam.classList.remove('hide-pages');
});
btnTeamExit?.addEventListener('click', () => {
  sectionHeder.classList.remove('hide-pages');
  sectionTeam.classList.add('hide-pages');
});

//!=====btnSectionNavigation====================================

btnNavigationHeder?.addEventListener('click', () => {
  sectionHomepage.classList.remove('hide');
  sectionSprint.classList.add('hide');
  sectionAudioChallenge.classList.add('hide');
  sectionTextbook.classList.add('hide');
  sectionStatistics.classList.add('hide');
  sectionNavigation.classList.add('hide');
  sectionTeam.classList.add('hide-pages');
});
btnNavigationSprint?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionSprint.classList.remove('hide');
  sectionAudioChallenge.classList.add('hide');
  sectionTextbook.classList.add('hide');
  sectionStatistics.classList.add('hide');
});
btnNavigationAudioChallenge?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionSprint.classList.add('hide');
  sectionAudioChallenge.classList.remove('hide');
  sectionTextbook.classList.add('hide');
  sectionStatistics.classList.add('hide');
});
btnNavigationTextbook?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionSprint.classList.add('hide');
  sectionAudioChallenge.classList.add('hide');
  sectionTextbook.classList.remove('hide');
  sectionStatistics.classList.add('hide');
  const ntb = new TBook(1, 1);
  ntb.startTBook();
  preloader.classList.remove('preloader-hidden');
  preloaderPage();
});
btnNavigationStatistics?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide');
  sectionSprint.classList.add('hide');
  sectionAudioChallenge.classList.add('hide');
  sectionTextbook.classList.add('hide');
  sectionStatistics.classList.remove('hide');
  preloader.classList.remove('preloader-hidden');
  preloaderPage();
});
