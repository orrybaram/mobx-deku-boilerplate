import { render, tree } from 'deku';
import element from 'magic-virtual-element';
import AppState from './AppState';
import App from './App';
import {autorun} from 'mobx';

const appState = new AppState();

autorun(() => render(tree(
  <div>
hahahah
    <App appState={appState} />
  </div>),
  document.getElementById('root')
));
