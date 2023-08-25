import { useState } from "react";

function ProjectTwo() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 100);
  };

  const decrement = () => {
    setCount(count - 100);
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

export default ProjectTwo;
