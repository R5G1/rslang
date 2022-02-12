export default class Const {
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
  gameTimer = this.sprint.querySelector('.sprint-timer') as HTMLSpanElement;
  ROUND_DURATION: number = 30;
  word = this.sprint.querySelector('.field__word') as HTMLParagraphElement;
  translate = this.sprint.querySelector('.field__translate') as HTMLParagraphElement;
  score = this.sprint.querySelector('.sprint-score') as HTMLSpanElement;
}
