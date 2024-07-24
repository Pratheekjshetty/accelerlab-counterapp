import React, { useState } from "react";
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const handleIncrement =() =>(
    setCount(count+1)
  )
  const handleDecrement =()=>(
    setCount(count-1)
  )
  return (
    <div className="container">
      <div>
        <div className="counter">
          <p>{count}</p>
        </div>
        <div className="button">
            <button onClick={handleIncrement} className="Increment">Increment</button>
            <button onClick={handleDecrement} className="Decrement">Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
