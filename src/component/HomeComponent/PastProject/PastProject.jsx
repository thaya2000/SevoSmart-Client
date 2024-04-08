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
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full relative p-5">
        <div className="title flex items-center justify-center text-4xl md:text-6xl text-center m-5 relative">
          SEVO SMART TECH
        </div>
        <div className="past-project-description col-span-2 flex items-center justify-center m-5 text-xl relative">
          <div className="flex items-center justify-center">
            <p>
              {
                pastProjects[currentImageIndex % pastProjects.length]
                  .description
              }
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around flex-row relative my-5 ">
        <div className="cursor-pointer  border-2 mx-2 border-transparent hover:bg-slate-400 active:bg-slate-500 hover:rounded-full hover:border-solid  hover:border-2 hover:border-slate-800">
          <IoIosArrowBack size="5rem" onClick={handleLeftClick} />
        </div>
        <div className="past-project-image hidden lg:flex h-40 w-64">
          <img
            src={
              pastProjects[(currentImageIndex + 2) % pastProjects.length].image
            }
            alt={`Image ${(currentImageIndex + 2) % pastProjects.length}`}
          />
        </div>
        <div className="past-project-image flex  w-96 lg:h-48 lg:w-72">
          <img
            src={
              pastProjects[(currentImageIndex + 1) % pastProjects.length].image
            }
            alt={`Image ${(currentImageIndex + 1) % pastProjects.length}`}
          />
        </div>
        <div className="past-project-image hidden lg:flex h-40 w-64">
          <img
            src={pastProjects[currentImageIndex % pastProjects.length].image}
            alt={`Image ${currentImageIndex % pastProjects.length}`}
          />
        </div>
        <div className="cursor-pointer mx-2  border-2 border-transparent hover:bg-slate-400 active:bg-slate-500 hover:rounded-full hover:border-solid  hover:border-2 hover:border-slate-800">
          <IoIosArrowForward size="5rem" onClick={handleRightClick} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center  h-3/10 w-full  relative ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center justify-around w-8/10 h-full">
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
