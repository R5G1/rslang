/* eslint-disable */
import { audio } from './audio';

function playAudio(src: string): void {
  audio.src = src;
  audio.play();
}
export default playAudio;
