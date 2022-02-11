export default class DOM {
  sprint = document.querySelector('.sprint') as HTMLDivElement;

  fullscreenBtn = this.sprint.querySelector(
    '.controls__fullscreen-btn'
  ) as HTMLButtonElement;
  soundBtn = this.sprint.querySelector(
    '.controls__sound-btn'
  ) as HTMLButtonElement;
  closeBtn = this.sprint.querySelector(
    '.controls__close-btn'
  ) as HTMLButtonElement;
  startBtn = this.sprint.querySelector(
    '.welcome__start-btn'
  ) as HTMLButtonElement;
  levelInputs = this.sprint.querySelectorAll(
    '.level-item__input'
  ) as NodeListOf<HTMLInputElement>;
}
