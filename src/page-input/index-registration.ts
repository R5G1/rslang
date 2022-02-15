/* eslint-disable linebreak-style */
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

const createUser = async (url: RequestInfo, user: FormData) => {
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
};

function onRegistration() {
  const link = 'https://jsonplaceholder.typicode.com/posts';
  const formData = new FormData(formRegistration);
  formRegistration.addEventListener('submit', (e: any) => {
    e.preventDefault();

    createUser(link, formData)
      .then(() => {
        formRegistration.reset();
        colorTryR();
        setTimeout(colorNormalR, 1000);
      })
      .catch((err: any) => {
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
