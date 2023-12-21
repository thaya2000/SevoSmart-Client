import React, { useState, useRef, useEffect } from "react";
import "./NewBuildingConsultation.css";
import { BsCalendarDate } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";

export const NewBuildingConsultation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datepickerRef = useRef(null);

  const handleCalendarIconClick = () => {
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(true);
    }
  };

  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleMultipleChange(event) {
    setFiles([...event.target.files]);
  }

  function handleMultipleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFiles";
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(percentCompleted);
      },
    };

    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFiles(response.data.files);
      })
      .catch((error) => {
        console.error("Error uploading files: ", error);
      });
  }

  return (
    <div>
     <Navigation/>
      <div className="flex flex-col items-center gap-5 py-[100px]">
        <div className="flex flex-col sm:flex-row sm:justify-center gap-8">
          <div className="flex flex-col w-[250px]">
            <h1 className="text-3xl font-medium">
              Schedule your time & Connect with us
            </h1>
            <h1 className="text-3xl font-medium"></h1>
            <div className="flex flex-row ml-1 pr-4 mt-2">
              <TiTick size={25} color="#3F75C6" />
              <p className="ml-1 ">
                ensuring timely completion without compromising on quality
              </p>
            </div>
            <div className="flex flex-row ml-1 pr-4 mt-2">
              <TiTick size={25} color="#3F75C6" />
              <p className="ml-1 ">
                experience a seamless blend of precision and reliability in your
                construction endeavors
              </p>
            </div>
            <div className="flex flex-row ml-1 pr-4 mt-2">
              <TiTick size={25} color="#3F75C6" />
              <p className="ml-1 ">
                meticulously scheduling every phase of your project
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-[50px] w-[250px] mx-[3px]">
            <div className="flex flex-col  ">
              <text className="font-medium text-sm">First Name</text>
              <input
                className="pl-[4px] h-7 rounded-md bg-[#D9D9D9] "
                type="text"
              />
            </div>
            <div className="flex flex-col  ">
              <text className="font-medium text-sm"> Last Name</text>
              <input
                className="pl-[4px] h-7 rounded-md bg-[#D9D9D9] "
                type="text"
              />
            </div>
            <div className="flex flex-col mt-2">
              <text className="font-medium text-sm">Email ID</text>
              <input
                className="h-7 pl-[4px] rounded-md  bg-[#D9D9D9]"
                type="text"
              />
            </div>
            <div className="flex flex-col mt-2">
              <text className="font-medium text-sm">Phone No</text>
              <input
                className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col w-[250px]">
            <p className="mt-2 pr-4 ml-1">
              Do you have any plans already?{" "}
              <a href="#">
                <span className="hover:cursor-pointer py-4 text-[#0569FF]">
                  Submit
                </span>
              </a>{" "}
              your documents here
            </p>
            <div className="mt-2 ml-6">
              <form onSubmit={handleMultipleSubmit}>
                <label
                  htmlFor="file-input"
                  className="flex items-center mb-2 hover:cursor-pointer"
                >
                  <FaRegFolderClosed size={30} />
                </label>
                <input
                  id="file-input"
                  className="hidden"
                  type="file"
                  multiple
                  onChange={handleMultipleChange}
                />
                <button
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  type="submit"
                >
                  Upload
                </button>
                <progress
                  className="h-2.5 w-100 rounded-full"
                  value={uploadProgress}
                  max="100"
                ></progress>
              </form>
              {uploadedFiles.map((file, index) => (
                <img key={index} src={file} alt={`Uploaded content ${index}`} />
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[250px] mx-[3px]">
            <p className="mt-3">
              <a href="#">
                <span className="hover:cursor-pointer text-[#0569FF]">
                  Click here
                </span>{" "}
              </a>
              to schedule time
            </p>

            <div className="flex gap-4 items-center mt-3 h-7 border-gray-800">
              <BsCalendarDate
                size={30}
                onClick={handleCalendarIconClick}
                className="hover:cursor-pointer"
              />

              <DatePicker
                ref={datepickerRef}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                className="text-black"
              />
            </div>

            <button className="bg-[#334BA1] mt-3 rounded-full h-7">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
