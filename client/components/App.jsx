import element from 'magic-virtual-element';
import Counter from './Counter';

export default {
  render ({props}) {
    return (
      <Counter {...props} />
    );
  }
};
