import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { counterActions } from './store';

function App() {
  const dispatch = useDispatch();
  const [increaseBy, setIncreaseBy] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const isDisabled = counter <= 0 ? true: false;
  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <input type="number" onChange={(e) => setIncreaseBy(+e.target.value)}/>
      <button onClick={() => dispatch(counterActions.increment(increaseBy))}>Increment</button>
      <button onClick={() => dispatch(counterActions.decrement())} disabled={isDisabled}>Decrement</button>
    </div>
  );
}

export default App;
