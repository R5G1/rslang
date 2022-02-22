/* eslint-disable linebreak-style */
window.onload = function () {
  const preloader: any = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(() => {
    preloader.classList.add('preloader-hidden');
  }, 2000);
};
