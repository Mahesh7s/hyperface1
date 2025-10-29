import React, { useState, useMemo, useCallback } from "react";

const NumberList = React.memo(({ numbers }) => {
  console.log("Rendering NumberList...");
  return (
    <ul>
      {numbers.map((n, index) => (
        <li key={index}>{n}</li>
      ))}
    </ul>
  );
});

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3]);

  //  useCallback ensures this function reference is stable until `numbers` changes
  const addNumber = useCallback(() => {
    setNumbers((prev) => [...prev, prev.length + 1]);
  }, []);

  //  Memoize numbers correctly (depends on `numbers`)
  const memoizedNumbers = useMemo(() => numbers, [numbers]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={addNumber}>Add Number</button>

      <NumberList numbers={memoizedNumbers} />
    </div>
  );
};

export default CounterApp;
