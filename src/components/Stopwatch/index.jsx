import { useEffect, useRef, useState } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalId = useRef(); //vytvori object {current: value}, vydrzi i prekresleni komponenty

  const handleStart = () => {
    intervalId.current = setInterval(() => {
        setSeconds((prev) => prev + 1)
    }, 1000)
    setSeconds(0) //vynuluje stopky
  }

  const handleStop = () => {
    clearInterval(intervalId.current);
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch: {seconds}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
};

export default Stopwatch;