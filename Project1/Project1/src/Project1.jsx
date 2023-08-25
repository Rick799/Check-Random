import { useState } from "react";

function ProjectOne() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 50);
  };

  const decrement = () => {
    setCount(count - 50);
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

export default ProjectOne;
