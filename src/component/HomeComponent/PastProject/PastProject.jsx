import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbSolarPanel2 } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { BiSolidBuildingHouse } from "react-icons/bi";

import "./PastProject.css";
import PropTypes from "prop-types";
import PastProjectHistory from "../PastProjectHistory/PastProjectHistory";

export default function PastProject({ pastProjects }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % pastProjects.length
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [pastProjects.length]);

  const handleRightClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pastProjects.length);
  };

  const handleLeftClick = () => {
    setCurrentImageIndex(
      (currentImageIndex + pastProjects.length - 1) % pastProjects.length
    );
  };

  return (
    <div className="past-project flex flex-col">
      <div className="flex flex-row  h-4/10 w-full relative ">
        <div className="title flex items-center justify-center  h-full w-2/6  text-7xl">
          SEVO SMART TECH
        </div>
        <div className="past-project-description flex items-center justify-center h-full w-4/6 ">
          <div className="flex items-center justify-center w-10/12 h-4/5">
            <p>
              {
                pastProjects[currentImageIndex % pastProjects.length]
                  .description
              }
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around flex-row  h-3/10 w-full  relative ">
        <div>
          <IoIosArrowBack size="5vw" onClick={handleLeftClick} />
        </div>
        <div className="past-project-image flex h-4/5 w-1/5">
          <img
            src={
              pastProjects[(currentImageIndex + 2) % pastProjects.length].image
            }
            alt={`Image ${(currentImageIndex + 2) % pastProjects.length}`}
          />
        </div>
        <div className="past-project-image flex h-4/5 w-1/5">
          <img
            src={
              pastProjects[(currentImageIndex + 1) % pastProjects.length].image
            }
            alt={`Image ${(currentImageIndex + 1) % pastProjects.length}`}
          />
        </div>
        <div className="past-project-image flex h-4/5 w-1/5">
          <img
            src={pastProjects[currentImageIndex % pastProjects.length].image}
            alt={`Image ${currentImageIndex % pastProjects.length}`}
          />
        </div>
        <div>
          <IoIosArrowForward size="5vw" onClick={handleRightClick} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center  h-3/10 w-full  relative ">
        <div className="flex flex-row items-center justify-around w-8/10 h-full">
          <PastProjectHistory
            projectName="Solar"
            color="#ffd700"
            pastProjectNo={54}
            icon={<TbSolarPanel2 size="4rem" color="#ffd700" />}
          />
          <PastProjectHistory
            projectName="Building"
            color="#DB944B"
            pastProjectNo={74}
            icon={<IoIosPeople size="4rem" color="#DB944B" />}
          />
          <PastProjectHistory
            projectName="Construction"
            color="#2EAB47"
            pastProjectNo={56}
            icon={<BiSolidBuildingHouse size="4rem" color="#2EAB47" />}
          />
        </div>
      </div>
    </div>
  );
}

PastProject.propTypes = {
  pastProjects: PropTypes.array.isRequired,
};
