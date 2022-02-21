import Utils from './utils/utils';
import Const from './const/const';
import API from './API/api';
import Gameplay from './gameplay/gameplay';

export default class Sprint {
  utils: Utils = new Utils();

  const: Const = new Const();

  API: API = new API();

  gameplay: Gameplay = new Gameplay();

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addListenerToFullscreenBtn(Element: HTMLButtonElement) {
    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        this.const.sprint.requestFullscreen().catch((err: Error) => {
          // eslint-disable-next-line no-alert
          alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
        Element.classList.add('controls__fullscreen-out-btn');
      } else {
        document.exitFullscreen();
        Element.classList.remove('controls__fullscreen-out-btn');
      }
    };
    Element.addEventListener('click', toggleFullscreen);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, class-methods-use-this
  addListenerToCloseBtn(Element: HTMLButtonElement) {
    const onCloseBtn = () => { document.exitFullscreen().catch(() => {}); };
    Element.addEventListener('click', onCloseBtn);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addListenerToStartBtn(Element: HTMLButtonElement) {
    const onStartBtn = () => {
      this.gameplay.startRound();
    };
    Element.addEventListener('click', onStartBtn);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addSrcToBtnSounds() {
    this.gameplay.trueSound.src = '/src/sprint/assets/sounds/true.mp3';
    this.gameplay.falseSound.src = '/src/sprint/assets/sounds/false.mp3';
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addListenerToAgainBtn(Element: HTMLButtonElement) {
    const onAgainBtn = () => {
      this.const.modalResult.classList.add('hide');
      this.gameplay.startRound();
    };
    Element.addEventListener('click', onAgainBtn);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async start() {
    this.addListenerToFullscreenBtn(this.const.fullscreenBtn);
    this.addSrcToBtnSounds();
    this.addListenerToSoundBtn(this.const.soundBtn);
    this.addListenerToCloseBtn(this.const.closeBtn);
    this.addListenerToStartBtn(this.const.startBtn);
    this.addListenerToAgainBtn(this.const.againBtn);
  }
}
