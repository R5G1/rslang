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
const link = 'https://react-learnwords-example.herokuapp.com/users';
const token = '';

const createUser = async (url: RequestInfo, user: any) => {
  console.log(typeof user, user);
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    //body: user,
  });

  const content = await rawResponse.json();
  console.log(content);

  if (!rawResponse.ok) {
    throw new Error(
      `ошибка по адресу ${url}, статус ошибки ${rawResponse.status}`
    );
  }
  return content;
};

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
        setTimeout(colorNormalR, 1000);
      })
      .catch((err) => {
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
function colorNormalR() {
  const coloStyl = document.querySelector('.registration__content') as any;
  coloStyl.style.backgroundColor =
    'rgb(187, 187, 187)' as unknown as HTMLStyleElement;
  return coloStyl;
}
//!=================================================
