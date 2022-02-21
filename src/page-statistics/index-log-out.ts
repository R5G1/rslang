/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/comma-dangle */
const nameInput = document.querySelector('.user-info__content-input') as
  | HTMLInputElement
  | any;

const contentLoginOut = document.querySelector(
  '.user-info__content-login-out'
) as HTMLDivElement;

function setLocalStorage(): void {
  localStorage.setItem('nameinput', nameInput.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage(): void {
  if (localStorage.getItem('nameinput')) {
    nameInput.value = localStorage.getItem('nameinput');
  }
}
window.addEventListener('load', getLocalStorage);

contentLoginOut?.addEventListener('click', () => {
  document.querySelector('.main-page')?.classList.remove('hide-pages');
  document.querySelector('.authorisation')?.classList.add('hide-pages');
  document.querySelector('.contents-authorisation__user-login')?.classList.remove('hide-pages');
  document.querySelector('.contents-authorisation__user-info')?.classList.add('hide-pages');
  const inerRegitr: any = document.querySelector('.statistics__content-heder-text');
  inerRegitr.innerHTML = '(зарегистрируйтесь чтобы увидеть прогресс)';
  localStorage.clear();
});

// const informationName = document.querySelector('.user-info__content-text') as HTMLDivElement;
// const informationStatistics = document.querySelector('.statistics__content-heder-text') as HTMLDivElement;

// function showName() {
//   const local: any = localStorage.getItem('loginUser');
//   const parsLocal = JSON.parse(local);
//   const userIdString = parsLocal.userId;
//   if (localStorage.getItem('loginUser') !== null) {
//     informationName.innerHTML = parsLocal.userId;
//     informationStatistics.innerHTML = `userId ${parsLocal.userId}`;
//   }
// }
// showName();
// window.addEventListener('load', showName);
