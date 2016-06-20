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
    </div>
  );
  function onReset () {
    props.appState.resetTimer();
  }
}
export default App;
