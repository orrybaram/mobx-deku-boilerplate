import element from 'magic-virtual-element';

const App = {
  render
};

function render ({props}) {
  return (
    <div>
      <button onClick={onReset}>
        Seconds passed: {props.appState.timer}
      </button>
      <div>{props.appState.counter}</div>
      <button onClick={props.appState.increaseCounter()}>+</button>
      <button onClick={props.appState.decreaseCounter()}>+</button>
    </div>
  );
  function onReset () {
    props.appState.resetTimer();
  }
}
export default App;
