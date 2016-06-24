import {render, tree} from 'deku';
import element from 'magic-virtual-element';
import AppState from './AppState';
import App from './App';

const appState = new AppState();

render(tree(
  <div>
    <App appState={appState} />
  </div>),
  document.getElementById('root')
);
