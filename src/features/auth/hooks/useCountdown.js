import { useEffect, useRef, useState } from "react";

function useCountdown(initialTime) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [started, setStarted] = useState(false);
  const intervalRef = useRef(null);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!started) {
      clearTimer();
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime < 1) {
          clearInterval(intervalRef.current);
          setStarted(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return clearTimer;
  }, [started]);


  const getFormattedCounter = () => {
    const minutes = Math.floor(timeRemaining / 60)
      .toString()
      .padStart(2, "0");
    const seconds = timeRemaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const restartCountdown = () => {
    setTimeRemaining(initialTime);
    setStarted(true);
  };

  const resetCountdown = () => {
    setTimeRemaining(0);
  };

  return {
    timeRemaining,
    restartCountdown,
    resetCountdown,
    getFormattedCounter,
    isExpired: timeRemaining === 0,
  };
}

export default useCountdown;
