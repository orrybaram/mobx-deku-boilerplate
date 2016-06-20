import { observable } from 'mobx';

class AppState {
  @observable timer = 0;
  @observable counter = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }
  resetTimer() {
    this.timer = 0;
  }
  increaseCounter() {
    this.counter += 1;
  }
  decreaseCounter() {
    this.counter -= 1;
  }
}

export default AppState;
