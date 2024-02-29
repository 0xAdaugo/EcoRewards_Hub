import { useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    count === 10 ? setCount(count) : setCount(count + 1);
  }

  function decrement() {
    count === 0 ? setCount(count) : setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <div className="d-flex justify-space-between">
        <button className="btn btn-danger" type="button" onClick={decrement}>
          Decrement Count (-)
        </button>
        <button className="btn btn-success" type="button" onClick={increment}>
          Increment Count (+)
        </button>
      </div>
    </div>
  );
}
