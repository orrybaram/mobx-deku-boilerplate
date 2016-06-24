import element from 'magic-virtual-element';
import {observer} from 'mobx-deku';

export default observer({
  render ({props}) {
    return (
      <div>
        <div class='app'>{props.state.counter}</div>
        <button onClick={decreaseCounter}>-</button>
        <button onClick={increaseCounter}>+</button>
      </div>
    );
    function increaseCounter () {
      props.state.increaseCounter();
    }
    function decreaseCounter () {
      props.state.decreaseCounter();
    }
  }
});
