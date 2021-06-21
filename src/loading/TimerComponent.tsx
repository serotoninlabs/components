import React, { useState, useEffect } from "react";

interface TimerProps {
  time: string;
  deadlineText: string;
  format?: "words" | "clock" | "hybrid";
}

export const TimerComponent: React.FC<TimerProps> = ({time, deadlineText, format}) => {
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
    let timeLeft: {[key: string]: number} = {};

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
    let intervalWord = interval;

    // Remove plural if one unit left
    if (timeLeft[interval] === 1) {
      intervalWord = interval.slice(0, -1);

      // Replace with nbsp so spacing doesn't jump as much on fast-moving minutes/seconds (but alignment looks a bit off, so don't do on days/hours)
      if (interval === "minutes" || interval === "seconds") {
        intervalWord += " ";
      }
    }

    let timeLeftText: number | string = timeLeft[interval];
    let intervalText = ` ${intervalWord} `;
    if (format === "clock") {
      timeLeftText = timeLeftText.toString().padStart(2, '0');
      if (idx === 3) {
        intervalText = "";
      } else if (idx === 2) {
        intervalText = ";"
      } else {
        intervalText = ":"
      }
    }
    if (format === "hybrid") {
      return (
        <span key={idx}>
          <p>{timeLeftText}</p>
          <p>{intervalText}</p>
        </span>
      )
    }
    return (
      <React.Fragment key={idx}>
        {timeLeftText}{intervalText}
      </React.Fragment>
    );
  });

  return (
    <>
      {format !== "hybrid" ? (timerComponents.length ? timerComponents : deadlineText)
      : <div className="time-wrapper">{timerComponents.length ? timerComponents : deadlineText}</div>  
    }
    </>
  );
};
