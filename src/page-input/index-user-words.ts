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
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGNjOGViYjY1MTY4MDAxNWE4ZDYzMSIsImlhdCI6MTY0NTAwNTA1NCwiZXhwIjoxNjQ1MDE5NDU0fQ.CCrE1vHwbDEWrRAgCsGEpm5ReepRnzDsi_oqahdk1qE';
// let contentUserWords;
// const createUserWord = async (url: RequestInfo, { userId, wordId, word }) => {
//   const rawResponse = await fetch(url, {
//     method: 'POST',
//     withCredentials: true,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(word),
//   });

//   contentUserWords = await rawResponse.json();
//   console.log(contentUserWords);

//   localStorage.setItem('loginser', JSON.stringify(contentUserWords));

//   if (!rawResponse.ok) {
//     throw new Error(
//       `ошибка по адресу ${url}, статус ошибки ${rawResponse.status}`
//     );
//   }
//   return contentUserWords;
// };

// function oncreateUserWord() {
//   const linkUserWords = `https://react-learnwords-example.herokuapp.com/users/${userId}/words/${wordId}`;
// }
// oncreateUserWord();
