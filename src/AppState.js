import { observable } from 'mobx';

class AppState {
  @observable timerCount = 0;
  @observable counter = 0;
  @observable exampleText = 'Example text';

  constructor () {
    setInterval(() => {
      this.timerCount += 1;
    }, 1000);
  }
  resetTimer () {
    this.timerCount = 0;
  }
  increaseCounter () {
    this.counter += 1;
  }
  decreaseCounter () {
    this.counter -= 1;
  }
  updateText (e) {
    this.exampleText = e.target.value;
  }
}

export default AppState;
