import React from "react";
import "./NewBuildingConsultation.css";
import { AcmeLogo } from "../../components/nav/AcmeLogo";
import { BsCalendarDate } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";

export const NewBuildingConsultation = () => {
  return (
    <div>
      <div className="flex flex-row w-[100%] lg:w-[70%] mx-auto">
      <div className="flex flex-col w-[60%] my-12 mt-20 mx-auto">
        <h1 className="text-3xl font-medium">
          Schedule your time & Connect  with us
        </h1>
        <h1 className="text-3xl font-medium">
       
        </h1>
        <div className="flex flex-row ml-1 pr-4 mt-2">
        <TiTick size={25} color="#3F75C6"/>
        <p className="ml-1 ">ensuring timely completion without compromising on quality</p>
        </div>
        <div className="flex flex-row ml-1 pr-4 mt-2">
        <TiTick size={25} color="#3F75C6"/>
        <p className="ml-1 ">experience a seamless blend of precision and reliability in your construction endeavors</p>
        </div>
        <div className="flex flex-row ml-1 pr-4 mt-2">
        <TiTick size={25} color="#3F75C6"/>
        <p className="ml-1 ">meticulously scheduling every phase of your project</p>
        </div>
        <p className="mt-2 pr-4 ml-1">Do you have any plans already? <a href="#"><span className="hover:cursor-pointer text-[#0569FF]">Submit</span></a> your documents here</p>
        <div className="mt-2 ml-6">
        <FaRegFolderClosed size={30}/>
        </div>
       
      </div>
      <div className="flex flex-col w-[40%] my-12 mt-20 mx-auto"> {/* Adjusted margin */}
        <div className="flex flex-col  ">
          
            <text className="font-medium text-sm">Full Name</text>
            <input className="h-7 bg-[#D9D9D9] w-[100%] lg:w-[60%]" type="text" />
          
        </div>
        <div className="flex flex-col mt-2">
          
            <text className="font-medium text-sm">Email ID</text>
            <input className="h-7  bg-[#D9D9D9] w-[100%] lg:w-[60%]" type="text" />
          
        </div>
        <div className="flex flex-col mt-2">
          
            <text className="font-medium text-sm">Phone No</text>
            <input className="h-7 bg-[#D9D9D9] w-[100%] lg:w-[60%]" type="text" />
          
        </div>
        <p className="mt-3"><a href="#"><span className="hover:cursor-pointer text-[#0569FF]">Click here</span></a> to schedule time</p>
        <div className="mt-3">
        <BsCalendarDate size={30}/>
        </div>
        <button className="bg-[#334BA1] mt-3 rounded-full h-7 w-[100%] lg:w-[60%]">
          Submit
        </button>

       
      </div>
    </div>
    </div>
  );
};
