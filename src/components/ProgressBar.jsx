import { useState, useEffect } from "react";

function ProgressBar({ timer }) {
  const [remainingTime, serRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      serRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress max={timer} value={remainingTime} />;
}

export default ProgressBar;
