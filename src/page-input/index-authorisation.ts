/* eslint-disable linebreak-style */
/* eslint-disable no-sequences */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-multi-assign */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/comma-dangle */
// eslint-disable-next-line linebreak-style
/* eslint-disable spaced-comment */
//!==================================================
const formAuthorisation = document.querySelector(
  '.authorisation__input-authorisation'
) as HTMLFormElement | any;

const inputAuthorisation = document.querySelector(
  '.authorisation__input-email'
) as HTMLInputElement;
const passwordAuthorisation = document.querySelector(
  '.authorisation__input-password'
) as HTMLInputElement;
const submitBtnAuthorisation = <Element>(
  document.querySelector('.authorisation__input-btn')
);

//!==================================================
// const link2 = 'https://rss-lang-task.herokuapp.com/signin';
const link2 = 'https://react-learnwords-example.herokuapp.com/signin';
let contentloginUser;

const loginUser = async (url: RequestInfo, user: any) => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  contentloginUser = await rawResponse.json();
  console.log(contentloginUser);

  localStorage.setItem('loginUser', JSON.stringify(contentloginUser));

  if (!rawResponse.ok) {
    throw new Error(
      `ошибка по адресу ${url}, статус ошибки ${rawResponse.status}`
    );
  }
  return contentloginUser;
};

localStorage.getItem('loginUser');

function onLoginUser() {
  formAuthorisation.addEventListener('submit', (e: any) => {
    e.preventDefault();
    const user = {
      email: inputAuthorisation.value,
      password: passwordAuthorisation.value,
    };
    loginUser(link2, user)
      .then(() => {
        formAuthorisation.reset();
        colorTryA();
        setTimeout(colorNormalA, 1000);
        setTimeout(exitFormAuthorisation, 1100);
      })
      .catch((err) => {
        colorFalseA();
        setTimeout(colorNormalA, 1000);
        console.log(err);
      });
  });
}
onLoginUser();
//!=================================================
function colorTryA() {
  const coloStyl = document.querySelector('.authorisation__content') as any;
  coloStyl.style.backgroundColor = 'green' as unknown as HTMLStyleElement;
  return coloStyl;
}
function colorFalseA() {
  const coloStyl = document.querySelector('.authorisation__content') as any;
  coloStyl.style.backgroundColor = 'red' as unknown as HTMLStyleElement;
  return coloStyl;
}
function colorNormalA() {
  const coloStyl = document.querySelector('.authorisation__content') as any;
  coloStyl.style.backgroundColor =
    'rgb(187, 187, 187)' as unknown as HTMLStyleElement;
  return coloStyl;
}
function exitFormAuthorisation(): void {
  document.querySelector('.authorisation')?.classList.add('hide-pages');
  document.querySelector('.main-page')?.classList.remove('hide-pages');
  document
    .querySelector('.contents-authorisation__user-login')
    ?.classList.add('hide-pages');
  document
    .querySelector('.contents-authorisation__user-info')
    ?.classList.remove('hide-pages');
}
//!=================================================
function showAuthorisatione() {
  if (localStorage.getItem('loginUser')) {
    exitFormAuthorisation();
  }
}

window.addEventListener('load', showAuthorisatione);
