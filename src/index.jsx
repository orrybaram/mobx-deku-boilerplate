import {render, tree} from 'deku';
import element from 'magic-virtual-element';
import {observable} from 'mobx';
import {observer} from 'mobx-deku';

class AppState {
  @observable counter = 0;
  increaseCounter () {
    this.counter += 1;
  }
}
const appState = new AppState();

const App = observer({
  render ({props}) {
    return (
      <div>
        <div class='app'>{props.appState.counter}</div>
        <button onClick={onClick}>+</button>
      </div>
    );
    function onClick () {
      props.appState.increaseCounter();
    }
  }
});

render(tree(<App appState={appState} />), document.querySelector('#root'));