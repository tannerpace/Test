import logo from './logo.svg';
import './App.css';
import CountUp from './CountUp';
import CountDown from './CountDown';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1)
  const countDown = () => setCount(count - 1)

  return (
    <div className="App">
      <header className="App-header">
        {count}



        <CountUp countUp={countUp} />
        <CountDown countDown={countDown} />



      </header>
    </div>
  );
}

export default App;
