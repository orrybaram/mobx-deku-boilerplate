import element from 'magic-virtual-element';
import observer from './lib/mobx-deku';

export default observer({
  render ({props}) {
    return (
      <div>
        <h1>Timer Example</h1>
        <h2>{props.appState.timerCount}s</h2>
        <button onClick={onReset}>Reset</button>
        <h1>Counter Example</h1>
        <h2>{props.appState.counter}</h2>
        <button onClick={decreaseCounter}>-</button>
        <button onClick={increaseCounter}>+</button>
        <h1>Input Example</h1>
        <div>{props.appState.exampleText}</div>
        <input value={props.appState.exampleText} onKeyDown={updateText}/>
      </div>
    );
    function onReset () {
      props.appState.resetTimer();
    }
    function increaseCounter () {
      props.appState.increaseCounter();
    }
    function decreaseCounter () {
      props.appState.decreaseCounter();
    }
    function updateText (e) {
      props.appState.updateText(e);
    }
  }
});

