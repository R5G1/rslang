/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-multi-assign */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/comma-dangle */
// eslint-disable-next-line linebreak-style
/* eslint-disable spaced-comment */
//!==================================================

let contentUserWords;
const createUserWord = async (url: RequestInfo, tokenString: any) => {
  const rawResponse = await fetch(url, {
    method: 'POST',
    // withCredentials: true,
    headers: {
      Authorization: `Bearer ${tokenString}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(word),
  });

  contentUserWords = await rawResponse.json();
  console.log(contentUserWords);

  localStorage.setItem('loginser', JSON.stringify(contentUserWords));

  if (!rawResponse.ok) {
    throw new Error(
      `ошибка по адресу ${url}, статус ошибки ${rawResponse.status}`
    );
  }
  return contentUserWords;
};

function oncreateUserWord() {
  const local: any = localStorage.getItem('loginUser');
  const parsLocal = JSON.parse(local);

  const tokenString = parsLocal.token;
  const userIdString = parsLocal.userId;
  const wordIdString = parsLocal.userId;
  const linkUserWords = `https://react-learnwords-example.herokuapp.com/users/${userIdString}/words/${wordIdString}`;
  createUserWord(linkUserWords, tokenString);
}
// oncreateUserWord();
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
