import React from "react";
import { useState, useEffect } from "react";
import "./PastProject.css";

export default function PastProject({ pastProjects }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % pastProjects.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [pastProjects.length]);

  return (
    <div className="past-project flex flex-col">
      <div className="flex flex-row  h-3/5 w-full relative border-2">
        <div className="title flex items-center justify-center  h-full w-2/6 border-2 text-7xl">
          SEVO SMART TECH
        </div>
        <div className="flex h-full w-4/6 border-2"></div>
      </div>
      <div className="flex items-center justify-around flex-row  h-2/5 w-full  relative border-2">
        <div className="flex h-4/5 w-1/5 bg-slate-950">
          <img
            src={pastProjects[currentImageIndex].image}
            alt={`Image ${currentImageIndex}`}
            className="object-fit-cover"
          />
        </div>
        <div className="flex h-4/5 w-1/5 bg-slate-950">
          <img
            src={
              pastProjects[(currentImageIndex + 1) % pastProjects.length].image
            }
            alt={`Image ${(currentImageIndex + 1) % pastProjects.length}`}
            className="object-fit-cover"
          />
        </div>
        <div className="flex h-4/5 w-1/5 bg-slate-950">
          <img
            src={
              pastProjects[(currentImageIndex + 2) % pastProjects.length].image
            }
            alt={`Image ${(currentImageIndex + 2) % pastProjects.length}`}
            className="object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
}
