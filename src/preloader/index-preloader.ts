/* eslint-disable linebreak-style */
// function preloaderPage() {
//   document.body.classList.add('loaded_hiding');
//   setTimeout(() => {
//     document.body.classList.add('loaded');
//     document.body.classList.remove('loaded_hiding');
//   }, 2500);
// }
// preloaderPage();
window.onload = function () {
  const preloader: any = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(() => {
    preloader.classList.add('preloader-hidden');
  }, 2000);
};
