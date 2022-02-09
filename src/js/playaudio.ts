import { audio } from './audio';

function PlayAudio(src: string): void {
  audio.src = `assets/${src}`;
  audio.play();
}
export default PlayAudio;
