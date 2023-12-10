import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { Radio } from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";

const EnergyOrder = () => {
  return (
    <div>
      <div className="flex flex-row w-[100%] lg:w-[70%] mx-auto">
        <div className="flex flex-col w-[40%] my-12 mt-20 mx-auto">
          <div className="flex flex-col  ">
            <text className="font-medium text-sm">Full Name</text>
            <input
              className="h-7 rounded-md bg-[#D9D9D9] w-[100%] lg:w-[60%]"
              type="text"
            />
          </div>
          <div className="flex flex-col mt-2">
            <text className="font-medium text-sm">Email ID</text>
            <input
              className="h-7 rounded-md bg-[#D9D9D9] w-[100%] lg:w-[60%]"
              type="text"
            />
          </div>
          <div className="flex flex-col mt-2">
            <text className="font-medium text-sm">Phone No</text>
            <input
              className="h-7 rounded-md bg-[#D9D9D9] w-[100%] lg:w-[60%]"
              type="text"
            />
          </div>
          <p className="mt-3">
            <a href="#">
              <span className="hover:cursor-pointer text-[#0569FF]">
                Click here
              </span>
            </a>
            to schedule time
          </p>

          <div className="flex justify-between items-end mt-3 w-[100%] lg:w-[60%]">
            <BsCalendarDate size={30} />
            <div className="flex flex-row relative">
              <input
                placeholder="Time"
                className="h-7 rounded-md w-21 bg-[#D9D9D9]" // Adjusted padding
                type="time"
              />
              {/* <div className="absolute right-2 top-2 pointer-events-none">
                <FaChevronDown color="#000000" />
              </div> */}
            </div>
          </div>

          <button className="bg-[#334BA1] mt-3 rounded-full h-7 w-[100%] lg:w-[60%]">
            Submit
          </button>
        </div>

        <div className="flex flex-col mx-auto my-auto">
          <p>Choose your product here</p>
          <div className="flex flex-col gap-5">
            <Radio node="square" name="type" label="Solar panel" />
            <Radio name="type" label="Battery" />
            <Radio name="type" label="Inverter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyOrder;
