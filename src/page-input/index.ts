/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
import './style-input.scss';
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
//!==================================================
const formAuthorisation = document.querySelector(
  '.authorisation__input-authorisation'
) as HTMLFormElement;
const inputAuthorisation = <Element>(
  (<unknown>document.querySelector('.authorisation__input-email'))
);
const passwordAuthorisation = <Element>(
  document.querySelector('.authorisation__input-password')
);
const submitBtnAuthorisation = <Element>(
  document.querySelector('.authorisation__input-btn')
);

const formRegistration = document.querySelector(
  '.registration__input-registration'
) as HTMLFormElement;

const inputRegistration = document.querySelector(
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  '.registration__input-email'
) as HTMLInputElement;
const passwordRegistration = document.querySelector(
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  '.registration__input-password'
) as HTMLInputElement;
const submitBtnRegistration = <Element>(
  document.querySelector('.registration__input-btn')
);

//!getData======================================================
const getData = async (url: RequestInfo) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибки ${response.status}`
    );
  }
  return response.json();
};
// getData('https://jsonplaceholder.typicode.com/todos/1').then(
//   (data) => console.log(data));
const onAuthorisation = () => {
  formAuthorisation.addEventListener('submit', (e) => {
    e.preventDefault();
    getData('https://react-learnwords-example.herokuapp.com/doc/users/')
      .then(() => {
        formAuthorisation.reset();
      })
      .catch((err: any) => {
        console.log(err);
      });
  });
};

onAuthorisation();
//!onRegistration======================================================

const createUser = async (url: RequestInfo, user: HTMLFormElement) => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!rawResponse.ok) {
    throw new Error(
      `ошибка по адресу ${url}, статус ошибки ${rawResponse.status}`
    );
  }
  return rawResponse.json();

  console.log(content);
};
const link = 'https://rss-lang-task.herokuapp.com/';

const onRegistration = () => {
  const user = {
    name: 'rew',
    password: 'fail',
  };
  formRegistration.addEventListener('submit', (e) => {
    e.preventDefault();
    createUser(link, user)
      .then(() => {
        formRegistration.reset();
        console.log(formRegistration);
      })
      .catch((err: any) => {
        console.log(err);
      });
  });
};

onRegistration();

//!onlAuthorisation=================================================
// function onRegistration() {
//   const user = {
//     email: inputRegistration.value,
//     password: passwordRegistration.value,
//   };
// }
// console.log(onRegistration());
// submitBtnRegistration.addEventListener('click', () => {
//   // formRegistration.reset();
//   if (inputRegistration.value === ' ') {
//     onRegistration();
//   }else(
//     console.log('225');
//   )
//   // sectionAuthorisation.classList.add('hide-pages');
//   // sectionMainPage.classList.remove('hide-pages');
// });
