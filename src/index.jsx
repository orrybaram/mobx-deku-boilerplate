import { render, tree } from 'deku';
import element from 'magic-virtual-element';
import AppState from './AppState';
import App from './App';
import {autorun} from 'mobx';

const appState = new AppState();

console.log('App', App);

render(tree(
  <div>
    <App appState={appState} />
  </div>),
  document.getElementById('root')
);
