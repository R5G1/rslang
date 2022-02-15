/* eslint-disable linebreak-style */
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
};

const onRegistration = () => {
  interface str {
    email: string;
    password: string;
  }
  const link = 'https://jsonplaceholder.typicode.com/posts';
  const user: str = {
    email: 'rew',
    password: 'fail',
  };
  formRegistration.addEventListener('submit', (e: any) => {
    e.preventDefault();
    createUser(link, user)
      .then(() => {
        formRegistration.reset();
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
