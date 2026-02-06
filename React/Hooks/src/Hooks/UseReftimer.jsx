import React, { useRef, useState } from 'react';

const UseRefTimer = () => {

  const [count, setCount] = useState(0);

  const timeRef = useRef(null);

  const start = () => {
    if (timeRef.current) return;

    timeRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  return (
    <div>
      <h1>Timer: {count}</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseRefTimer;
