import './App.css';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {Inc, Dec} from './States/reducers/index';


function App() {
  const currState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className='main'>
        <h1>{currState}</h1>
        <div className='btn'>
          <button id='btn1' onClick={() => dispatch(Inc())}>Increment</button>
          <button id='btn2' onClick={() => dispatch(Dec())}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;