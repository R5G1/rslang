import Utils from './utils/utils';
import Const from './const/const';
import API from './API/api';

export default class Sprint {
  utils: Utils = new Utils();
  const: Const = new Const();
  API: API = new API();

  addListenerToFullscreenBtn(Element: HTMLButtonElement) {
    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        this.const.sprint.requestFullscreen().catch((err: Error) => {
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
      const levelInputs = [
        ...this.const.levelInputs,
      ] as Array<HTMLInputElement>;
      const checkedInput = levelInputs.find(
        (el) => el.checked
      ) as HTMLInputElement;
      const value: number = checkedInput ? Number(checkedInput.value) : 0;
      console.log(value);
    };
    Element.addEventListener('click', onStartBtn);
  }

  start() {
    this.addListenerToFullscreenBtn(this.const.fullscreenBtn);
    this.addListenerToSoundBtn(this.const.soundBtn);
    this.addListenerToCloseBtn(this.const.closeBtn);
    this.addListenerToStartBtn(this.const.startBtn);

    console.log(this.API.getWords(5, 5));
  }
}
