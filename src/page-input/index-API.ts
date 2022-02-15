/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */

// const formAuthorisation = <Element>(
//   document.querySelector('.authorisation__input-authorisation')
// );
// const inputAuthorisation = <Element>(
//   (<unknown>document.querySelector('.authorisation__input-email'))
// );
// const passwordAuthorisation = <Element>(
//   document.querySelector('.authorisation__input-password')
// );
// const submitBtnAuthorisation = <Element>(
//   document.querySelector('.authorisation__input-btn')
// );

// //!=======================================
// const formRegistration = document.querySelector(
//   // eslint-disable-next-line @typescript-eslint/comma-dangle
//   '.registration__input-registration'
// ) as HTMLFormElement;
// console.log(formRegistration);
// console.log('12345');

// const inputRegistration = document.querySelector(
//   // eslint-disable-next-line @typescript-eslint/comma-dangle
//   '.registration__input-email'
// ) as HTMLInputElement;
// const passwordRegistration = document.querySelector(
//   // eslint-disable-next-line @typescript-eslint/comma-dangle
//   '.registration__input-password'
// ) as HTMLInputElement;
// const submitBtnRegistration = <Element>(
//   document.querySelector('.registration__input-btn')
// );

// // function onRegistration() {
// //   const user = {
// //     email: inputRegistration.value,
// //     password: passwordRegistration.value,
// //   };
// // }
// // submitBtnRegistration.addEventListener('click', onRegistration);

// //!getData======================================================

// const getData = async (url: RequestInfo) => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(
//       // eslint-disable-next-line @typescript-eslint/comma-dangle
//       `Ошибка по адресу ${url}, статус ошибки ${response.status}`
//     );
//   }

//   // eslint-disable-next-line @typescript-eslint/return-await
//   return await response.json();
// };
// // getData('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log(data));

// //!createUser======================================================

// async function createUser(
//   url: RequestInfo,
//   // eslint-disable-next-line @typescript-eslint/comma-dangle
//   user: { email: string; password: string }
// ) {
//   const rawResponse = await fetch(url, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });
//   if (!rawResponse.ok) {
//     throw new Error(
//       // eslint-disable-next-line @typescript-eslint/comma-dangle
//       `ошибка по адресу ${url}, статус ошибки ${rawResponse.status}`
//     );
//   }
//   return rawResponse.json();
// }

// // const onRegistration = () => {
// //   // eslint-disable-next-line @typescript-eslint/no-shadow
// //   const user = {
// //     email: 'inputRegistration.value',
// //     password: 'passwordRegistration.value',
// //   };
// //   formRegistration.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     const formData = JSON.stringify(formRegistration);
// //     // const carList = JSON.stringify(user);
// //     createUser('https://jsonplaceholder.typicode.com/todos/1', formData)
// //       .then(() => {
// //         formRegistration.reset();
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   });
// // };

// // onRegistration();
