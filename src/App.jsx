import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Redux/Features/Counter/counterSlice';
import Global from './components/Global';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())} >+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <Global />
    </div>
  );

}

export default App;
