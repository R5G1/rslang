/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
import './style-input.scss';

import './index-pages';
import './index-authorisation';
import './index-registration';

// eslint-disable-next-line import/first
// import './index-Api.ts';
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

const createUser = async (url: RequestInfo, user: {
  name: string;
  password: string;
}) => {
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

  // console.log(content);
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
