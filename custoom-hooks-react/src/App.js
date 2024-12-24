import { useState } from 'react';
import './App.css';
import { useToggle } from './useToggle';
import { useCount } from './useCount';
function App() {
  const [isVisible1, toggle1] =useToggle();
  const {state, toggle} = useToggle(); // this is object type . so custoom hook also return the object {} => In this it is not worked
  const {count,increase,decrease,restart}=useCount();
  return (
    <div className="App">
      <button onClick={toggle1}>
        {isVisible1 ? "hide" : "show"}
      </button>
    {isVisible1 && <h1>This is hidden Text</h1>}

    <button onClick={toggle}>
        {state ? "hide" : "show"}
      </button>
    {state && <h1>This is hidden Text</h1>}

    {/* Custom Hook increase, Decrease and restrat */}
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={restart}>Restart</button>
    </div>
    </div>
  );
}

export default App;
