/* eslint-disable linebreak-style */
import './style-input.scss';

const btnAuthorisation = <Element>(
  document.querySelector('.m-p__menu-ul-authorisation')
);

const sectionHomepage = <Element>document.querySelector('.main-page');
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

// eslint-disable-next-line spaced-comment
//======================================================
btnAuthorisation?.addEventListener('click', () => {
  sectionHomepage.classList.add('hide-pages');
  sectionAuthorisation.classList.remove('hide-pages');
});

btnAuthorisationExit.forEach((element: { addEventListener: (arg0: string, arg1: () => void) => void; }): void => {
  element?.addEventListener('click', () => {
    sectionAuthorisation.classList.add('hide-pages');
    sectionHomepage.classList.remove('hide-pages');
  });
});

btnRegistrationContent?.addEventListener('click', () => {
  sectionRegistrationContent.classList.remove('hide-authorisation');
  sectionAuthorisationContent.classList.add('hide-authorisation');
});
btnAuthorisationContent?.addEventListener('click', () => {
  sectionAuthorisationContent.classList.remove('hide-authorisation');
  sectionRegistrationContent.classList.add('hide-authorisation');
});
