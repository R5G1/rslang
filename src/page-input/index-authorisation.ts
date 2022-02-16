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

const inputAuthorisation = document.querySelector(
  '.authorisation__input-email'
) as HTMLInputElement;
const passwordAuthorisation = document.querySelector(
  '.authorisation__input-password'
) as HTMLInputElement;
const submitBtnAuthorisation = <Element>(
  document.querySelector('.authorisation__input-btn')
);

//!getData======================================================
// const getData = async (url: RequestInfo) => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(
//       `Ошибка по адресу ${url}, статус ошибки ${response.status}`
//     );
//   }
//   const content = await response.json();

//   console.log(content);
//   return content;
// };

// // getData('https://react-learnwords-example.herokuapp.com/users').then(
// //   (data) => console.log(data)
// // );
// const onAuthorisation = () => {
//   formAuthorisation.addEventListener('submit', (e: any) => {
//     e.preventDefault();

//     getData('https://react-learnwords-example.herokuapp.com/users')
//       .then(() => {
//         formAuthorisation.reset();
//         colorTryA();
//         setTimeout(colorNormalA, 1000);
//       })
//       .catch((err: any) => {
//         console.log(err);
//       });
//   });
// };

// onAuthorisation();
//!getData======================================================

const link2 = 'https://react-learnwords-example.herokuapp.com/signin';

const loginUser = async (url: RequestInfo, user: any) => {
  console.log(typeof user, user);
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
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
      })
      .catch((err) => {
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
function colorNormalA() {
  const coloStyl = document.querySelector('.authorisation__content') as any;
  coloStyl.style.backgroundColor =
    'rgb(187, 187, 187)' as unknown as HTMLStyleElement;
  return coloStyl;
}
//!=================================================
