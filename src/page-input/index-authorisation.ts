/* eslint-disable linebreak-style */
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

const inputAuthorisation = <Element>(
  (<unknown>document.querySelector('.authorisation__input-email'))
);
const passwordAuthorisation = <Element>(
  document.querySelector('.authorisation__input-password')
);
const submitBtnAuthorisation = <Element>(
  document.querySelector('.authorisation__input-btn')
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
  formAuthorisation.addEventListener('submit', (e: any) => {
    e.preventDefault();

    getData('https://react-learnwords-example.herokuapp.com/doc/users/')
      .then(() => {
        formAuthorisation.reset();
        colorTryA();
        setTimeout(colorNormalA, 1000);
      })
      .catch((err: any) => {
        console.log(err);
      });
  });
};

onAuthorisation();
//!=================================================
function colorTryA() {
  const coloStyl = document.querySelector('.authorisation__content') as any;
  coloStyl.style.backgroundColor = 'green' as unknown as HTMLStyleElement;
  return coloStyl;
}
function colorNormalA() {
  const coloStyl = document.querySelector('.authorisation__content') as any;
  coloStyl.style.backgroundColor =
    'rgb(187, 187, 187)' as unknown as HTMLStyleElement;
  return coloStyl;
}
