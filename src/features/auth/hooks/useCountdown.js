import { useEffect, useRef, useState } from "react";

function useCountdown(duration = 120) {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (counter < 1) {
      clearInterval(timerRef.current);
      return;
    }

    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);
    timerRef.current = interval;

    return () => {
      clearInterval(timerRef.current);
    };
  }, [counter]);

  const getFormattedCounter = () => {
    const minutes = Math.floor(counter / 60)
      .toString()
      .padStart(2, 0);
    const seconds = counter % 60;
    return `${minutes}:${seconds.toString().padStart(2, 0)}`;
  };

  const restartCountdown = () => {
    setCounter(duration);
  };

  const resetCountdown = () => {
    setCounter(0);
  };

  return {
    counter,
    restartCountdown,
    resetCountdown,
    getFormattedCounter,
    isExpired: counter === 0,
  };
}

export default useCountdown;
