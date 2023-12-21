import React, { useState, useRef, useEffect } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { Radio } from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { IoMdTime } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../Components/footer/Footer";

const EnergyOrder = () => {
    // State to manage selected date and time
  const [selectedDate, setSelectedDate] = useState(null);

  // Other existing state and ref definitions can go here...

  const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = {
    firstName: e.target.firstName ? e.target.firstName.value : '',
    lastName: e.target.lastName ? e.target.lastName.value : '',
    email: e.target.email ? e.target.email.value : '',
    phone: e.target.phone ? e.target.phone.value : '',
    solarPanel: e.target.solarpanel ? e.target.solarpanel.checked : false,
    battery: e.target.battery ? e.target.battery.checked : false,
    inverter: e.target.inverter ? e.target.inverter.checked : false,
    selectedDate: selectedDate ? selectedDate.toLocaleDateString() : null,
    selectedTime: e.target.time ? e.target.time.value : '',
  };

    try {
      const response = await axios.post('/api/energyOrder', formData);
      console.log('Data sent successfully:', response.data);
      // Handle any success scenarios here (e.g., show a confirmation message)
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle any error scenarios here (e.g., show an error message)
    }
  };
  
  const datepickerRef = useRef(null);

  const handleCalendarIconClick = () => {
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(true);
    }
  };

  return (
    <div>
      <Navigation />
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-5 py-[80px]">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col w-[250px]">
            <div className="flex flex-col  ">
              <text className="font-medium text-sm">First Name</text>
              <input
                
                className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
                type="text"
              />
            </div>
            <div className="flex flex-col  ">
              <text className="font-medium text-sm"> Last Name</text>
              <input
                className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
                type="text"
              />
            </div>
            <div className="flex flex-col mt-2">
              <text className="font-medium text-sm">Email ID</text>
              <input
                className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
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

          <div className="flex flex-col w-[250px] mx-[3px]">
            <p className="text-lg font-medium">Choose your product here</p>
            <div className="flex flex-col gap-5 mt-4 ml-5">
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="solarpanel"
                />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="solarpanel"
                >
                  Solar panel
                </label>
              </div>

              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="battery"
                  defaultChecked
                />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="battery"
                >
                  Battery
                </label>
              </div>
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="inverter"
                  defaultChecked
                />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="inverter"
                >
                  Inverter
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col w-[250px]">
            <p className="">
              <a href="#">
                <span className="hover:cursor-pointer text-[#0569FF]">
                  Click here
                </span>{" "}
              </a>
              to schedule time
            </p>

            <div className="flex flex-col gap-3 ">
              <div className="flex justify-items-start items-center gap-3 mt-3 h-7 border-gray-800">
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
                  className=""
                />
              </div>

              <div className="flex">
                <input
                  disableClock="true"
                  placeholder="Time"
                  className="h-7 hover:cursor-pointer rounded-md bg-[#D9D9D9]"
                  type="time"
                />
              </div>
            </div>

            <button type="submit" className="bg-[#334BA1] my-3 rounded-full h-7">
              Submit
            </button>
          </div>
          <div className="flex flex-col w-[250px] mx-[3px]">
            
          </div>
        </div>
        </div>
        </form>

      <Footer />
    </div>
  );
};

export default EnergyOrder;
