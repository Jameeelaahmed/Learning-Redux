import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const toggle = useSelector(state => state.counter.showCounter)

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement' })
  // }
  // const incrementHandler = () => {
  //   dispatch({ type: 'increment' })
  // }

  // const increaseHandler = () => {
  //   dispatch({ type: 'increase', amount: 5 })
  // }
  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' })
  // };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
