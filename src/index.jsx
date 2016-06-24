import {render, tree} from 'deku';
import {observable, action} from 'mobx';
import App from './app';
import element from 'magic-virtual-element';

class AppState {
  @observable counter = 0;
  @action increaseCounter () {
    this.counter += 1;
  }
}

const appState = new AppState();
function update (Application) {
  render(tree(<Application appState={appState} />), document.querySelector('#root'));
}
update(App);

if (module.hot) {
  module.hot.accept('./app.jsx', function() {
    let updatedApp = require('./app.jsx').default;
    update(updatedApp);
  });
}