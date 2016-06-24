import {render, tree} from 'deku';
import element from 'magic-virtual-element';
import App from './App';
import State from './State';

const state = new State();
const $root = document.querySelector('.app-root');

function update (Application) {
  render(tree(<Application state={state} />), $root);
}
update(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const updatedApp = require('./App.jsx').default;
    update(updatedApp);
  });
}
