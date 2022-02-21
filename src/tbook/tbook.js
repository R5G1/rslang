/* eslint-disable */
import * as evHUB from './handlers'
import API from '../js/api';
import startp from '../js/startp';
import {renderBook} from './rendbooks';
import sortWords from './sortwords'
import './tbook.css';

class TBook {
  constructor(lvl, page) {
    this.lvl = lvl;
    this.page = page;
    this.onEv = (e) => this.disp(e);
    this.Api = new API();
    this.words = startp;
  }

  setEvents() {
    const click = document.querySelectorAll('.click');
    [...click].map((el) => (el).addEventListener('click', this.onEv));
  }

  unsetEvents() {
    const click = document.querySelectorAll('.click');
    [...click].map((el) => (el).removeEventListener('click', this.onEv));
  }

  startTBook() {
    const prom = this.Api.getWords(0, 0);
    prom.then((value) => {
      this.words = value;
      // console.log(this.words)
      //sort  
      renderBook(sortWords(this.words));
      this.setEvents();
    })
  }

  async disp(evt) {
    const target = evt.target;
    console.log('target', target)
    evHUB[target.dataset.foo](target);
    this.unsetEvents();
    this.setEvents()
  }
}

export default TBook;