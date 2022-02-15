import Utils from './utils/utils';
import Const from './const/const';
import API from './API/api';
import Gameplay from './gameplay/gameplay';

export default class Sprint {
  utils: Utils = new Utils();
  const: Const = new Const();
  API: API = new API();
  gameplay: Gameplay = new Gameplay();

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

      if (this.gameplay.trueSound.volume && this.gameplay.falseSound.volume) {
        this.gameplay.trueSound.volume = 0;
        this.gameplay.falseSound.volume = 0;
      } else {
        this.gameplay.trueSound.volume = 1;
        this.gameplay.falseSound.volume = 1;
      }
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
      this.gameplay.startRound();
    };
    Element.addEventListener('click', onStartBtn);
  }

  addSrcToBtnSounds() {
    this.gameplay.trueSound.src = '/src/sprint/assets/sounds/true.mp3';
    this.gameplay.falseSound.src = '/src/sprint/assets/sounds/false.mp3';
  }

  addListenerToAgainBtn(Element: HTMLButtonElement) {
    const onAgainBtn = () => {
      this.const.modalResult.classList.add('hide');
      this.gameplay.startRound();
    };
    Element.addEventListener('click', onAgainBtn);
  }

  async start() {
    this.addListenerToFullscreenBtn(this.const.fullscreenBtn);
    this.addSrcToBtnSounds();
    this.addListenerToSoundBtn(this.const.soundBtn);
    this.addListenerToCloseBtn(this.const.closeBtn);
    this.addListenerToStartBtn(this.const.startBtn);
    this.addListenerToAgainBtn(this.const.againBtn);
  }
}
