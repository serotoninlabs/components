import React, { useState, useEffect } from "react";

interface TimerProps {
  time: string;
  deadlineText: string;
}

export const TimerComponent: React.FC<TimerProps> = ({time, deadlineText}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  function calculateTimeLeft() {
    const difference = +new Date(time) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval, idx) => {
    return (
      <React.Fragment key={idx}>
        {timeLeft[interval]} {interval}{" "}
      </React.Fragment>
    );
  });

  return (
    <>
      {timerComponents.length ? timerComponents : deadlineText}
    </>
  );
};
