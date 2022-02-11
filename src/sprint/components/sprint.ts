import Utils from './utils/utils';
import DOM from './DOM/dom';

export default class Sprint {
  utils: Utils = new Utils();
  DOM: DOM = new DOM();

  addListenerToFullscreenBtn(Element: HTMLButtonElement) {
    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        this.DOM.sprint.requestFullscreen().catch((err: Error) => {
          alert(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
        Element.classList.add('controls__fullscreen-out-btn');
      } else {
        document.exitFullscreen();
        Element.classList.remove('controls__fullscreen-out-btn');
      }
    };
    Element.addEventListener('click', toggleFullscreen);
  }

  addListenerToSoundBtn(Element: HTMLButtonElement) {
    const onSoundBtn = () => {
      Element.classList.toggle('controls__sound-mute-btn');
    };
    Element.addEventListener('click', onSoundBtn);
  }

  addListenerToCloseBtn(Element: HTMLButtonElement) {
    const onCloseBtn = () => {
      document.exitFullscreen().catch(() => {});
    };
    Element.addEventListener('click', onCloseBtn);
  }

  addListenerToStartBtn(Element: HTMLButtonElement) {
    const onStartBtn = () => {
      const levelInputs = [...this.DOM.levelInputs] as Array<HTMLInputElement>;
      const checkedInput = levelInputs.find(el => el.checked) as HTMLInputElement;
      const value: number = Number(checkedInput.value);
      console.log(value);
    }
    Element.addEventListener('click', onStartBtn);
  }

  start() {
    this.addListenerToFullscreenBtn(this.DOM.fullscreenBtn);
    this.addListenerToSoundBtn(this.DOM.soundBtn);
    this.addListenerToCloseBtn(this.DOM.closeBtn);
    this.addListenerToStartBtn(this.DOM.startBtn);
  }
}
