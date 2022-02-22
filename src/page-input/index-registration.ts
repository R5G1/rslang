/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-multi-assign */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/comma-dangle */
// eslint-disable-next-line linebreak-style
/* eslint-disable spaced-comment */
const formRegistration = document.querySelector(
  '.registration__input-registration'
) as HTMLFormElement | any;

const inputRegistration = document.querySelector(
  '.registration__input-email'
) as HTMLInputElement;

const passwordRegistration = document.querySelector(
  '.registration__input-password'
) as HTMLInputElement;

const submitBtnRegistration = <Element>(
  document.querySelector('.registration__input-btn')
);

//!onRegistration======================================================
const link = 'https://rss-lang-task.herokuapp.com/users';
// const link = 'https://react-learnwords-example.herokuapp.com/users';
let content;

const createUser = async (url: RequestInfo, user: any) => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    //body: user,
  });

  content = await rawResponse.json();

  localStorage.setItem('user', JSON.stringify(content));

  if (!rawResponse.ok) {
    throw new Error(
      `ошибка по адресу ${url}, статус ошибки ${rawResponse.status}`
    );
  }
  return content;
};
localStorage.getItem('user');

function onRegistration() {
  formRegistration.addEventListener('submit', (e: any) => {
    e.preventDefault();
    const user = {
      email: inputRegistration.value,
      password: passwordRegistration.value,
    };

    createUser(link, user)
      .then(() => {
        formRegistration.reset();
        colorTryR();
        setTimeout(exitFormRegistration, 1000);
        setTimeout(colorNormalR, 1000);
      })
      .catch((err) => {
        colorFalseR();
        setTimeout(colorNormalR, 1000);
        console.log(err);
      });
  });
}
onRegistration();
//!=================================================
function colorTryR() {
  const coloStyl = document.querySelector('.registration__content') as any;
  coloStyl.style.backgroundColor = 'green' as unknown as HTMLStyleElement;
  return coloStyl;
}
function colorFalseR() {
  const coloStyl = document.querySelector('.registration__content') as any;
  coloStyl.style.backgroundColor = 'red' as unknown as HTMLStyleElement;
  return coloStyl;
}
function colorNormalR() {
  const coloStyl = document.querySelector('.registration__content') as any;
  coloStyl.style.backgroundColor =
    'rgb(187, 187, 187)' as unknown as HTMLStyleElement;
  return coloStyl;
}
function exitFormRegistration() {
  document.querySelector('.registration__content')?.classList.add('hide-authorisation');
  document.querySelector('.authorisation__content')?.classList.remove('hide-authorisation');
}
//!=================================================
