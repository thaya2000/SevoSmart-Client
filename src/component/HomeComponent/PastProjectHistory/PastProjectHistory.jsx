import React, { useState, useEffect } from "react";
import "./PastProjectHistory.css";

export default function PastProjectHistory({
  projectName,
  pastProjectNo,
  icon,
  color,
}) {
  const [currentCount, setCurrentCount] = useState(1);

  useEffect(() => {
    let currentNumber = 1;
    const increment = Math.ceil(pastProjectNo / 100); // Adjust the speed of the countdown
    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= pastProjectNo) {
        clearInterval(interval);
        setCurrentCount(pastProjectNo);
      } else {
        setCurrentCount(currentNumber);
      }
    }, 10); // Adjust the speed of the countdown

    return () => clearInterval(interval);
  }, [pastProjectNo]);

  return (
    <div className="past-project-history flex flex-col items-center justify-around m-5">
      <div className="flex items-center justify-center relative h-full w-7/12 ">
        <div
          className="past-project-history-border1 flex items-center justify-center relative "
          style={{
            borderTopColor: color,
          }}
        >
          <div
            className="past-project-history-border2"
            style={{
              borderTopColor: color,
            }}
          >
            {currentCount}
          </div>
        </div>
        <div className="absolute bottom-0 right-0">{icon}</div>
      </div>
      <div className="flex items-center justify-center flex-col h-3/10 w-full">
        <p>successfully completed</p>
        <p>{projectName} projects</p>
      </div>
    </div>
  );
}
