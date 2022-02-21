export default class Const {
  sprint = document.querySelector('.sprint') as HTMLDivElement;

  fullscreenBtn = this.sprint.querySelector('.controls__fullscreen-btn') as HTMLButtonElement;

  soundBtn = this.sprint.querySelector('.controls__sound-btn') as HTMLButtonElement;

  closeBtn = this.sprint.querySelector('.controls__close-btn') as HTMLButtonElement;

  startBtn = this.sprint.querySelector('.welcome__start-btn') as HTMLButtonElement;

  levelInputs = this.sprint.querySelectorAll('.level-item__input') as NodeListOf<HTMLInputElement>;

  gameTimer = this.sprint.querySelector('.sprint-timer') as HTMLSpanElement;

  word = this.sprint.querySelector('.field__word') as HTMLParagraphElement;

  translate = this.sprint.querySelector('.field__translate') as HTMLParagraphElement;

  score = this.sprint.querySelector('.sprint-score') as HTMLSpanElement;

  trueBtn = this.sprint.querySelector('.buttons__true-btn') as HTMLButtonElement;

  falseBtn = this.sprint.querySelector('.buttons__false-btn') as HTMLButtonElement;

  multiplierMarks = this.sprint.querySelectorAll('.multiplier__mark') as NodeListOf<HTMLDivElement>;

  multiplyNumber = this.sprint.querySelector('.multiply-number') as HTMLDivElement;

  welcomeSection = this.sprint.querySelector('.sprint__welcome') as HTMLDivElement;

  gameSection = this.sprint.querySelector('.sprint__game') as HTMLDivElement;

  modalResult = this.sprint.querySelector('.sprint__modal-result') as HTMLDivElement;

  modalGameResult = this.sprint.querySelector('.sprint-result') as HTMLSpanElement;

  modalBarPercent = this.sprint.querySelector('.bar__percent') as HTMLDivElement;

  modalBarFill = this.sprint.querySelector('.bar__fill') as HTMLDivElement;

  modalMistakes = this.sprint.querySelector('.mistakes__heading span') as HTMLSpanElement;

  modalCorrects = this.sprint.querySelector('.correct__heading span') as HTMLSpanElement;

  mistakesList = this.sprint.querySelector('.mistakes__list') as HTMLUListElement;

  correctsList = this.sprint.querySelector('.correct__list') as HTMLUListElement;

  listItemTemplate = this.sprint.querySelector('.template__list') as HTMLTemplateElement;

  resultYesMark = this.sprint.querySelector('.result__yes') as HTMLDivElement;

  resultNoMark = this.sprint.querySelector('.result__no') as HTMLDivElement;

  againBtn = this.sprint.querySelector('.modal-result__again') as HTMLButtonElement;
}
