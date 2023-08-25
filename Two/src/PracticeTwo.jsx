import { useState } from "react";

function PracticeTwo() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 5);
  };

  const decrement = () => {
    setCount(count - 5);
  };

  return (
    <div className="App">
      <h1>Simple React Counter App</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default PracticeTwo;
