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
import OrderSolarPanelImage from "./OrderSolarPanel/OrderSolarPanelImage";

const EnergyOrder = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    date: "",
    time: "",
    solartype: "",
    power: "",
    customPower: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "First name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneno) {
      errors.phoneno = "Phone no is required";
    }
    if (!values.date) {
      errors.date = "Date is required!";
    }
    if (!values.time) {
      errors.time = "Time is required!";
    }
    if (!values.solartype) {
      errors.solartype = "Please select a solar type";
    }
    if (!values.power && !values.customPower) {
      errors.power = "Please select a power option or enter a custom power value";
    }
    return errors;
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const datepickerRef = useRef(null);

  const handleCalendarIconClick = () => {
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(true);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4 mb-4">
        <span className="ml-50 text-lg text-blue-900 font-semibold">
          Schedule a consultation to select the right product
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="OrderSolarPanelImage-container w-[600px] ml-0 mr-30 mt-10">
          <OrderSolarPanelImage />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-5 py-[80px]">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className="flex flex-col w-[300px]">
                <div className="flex flex-col">
                  <span className="font-medium text-sm mb-2">First Name</span>
                  <input
                    className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] w-full"
                    type="text"
                    value={formValues.firstname}
                    onChange={handleChange}
                    name="firstname"
                  />
                  <p className="text-red-700">{formErrors.firstname}</p>
                </div>

                <div className="flex flex-col mt-3">
                  <span className="font-medium text-sm mb-2">Last Name</span>
                  <input
                    className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] w-full"
                    type="text"
                    value={formValues.lastname}
                    onChange={handleChange}
                    name="lastname"
                  />
                  <p className="text-red-700">{formErrors.lastname}</p>
                </div>

                <div className="flex flex-col mt-3">
                  <span className="font-medium text-sm mb-2">Email ID</span>
                  <input
                    className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] w-full"
                    type="text"
                    value={formValues.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <p className="text-red-700">{formErrors.email}</p>
                </div>

                <div className="flex flex-col mt-3">
                  <span className="font-medium text-sm mb-2">Phone No</span>
                  <input
                    className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] w-full"
                    type="text"
                    value={formValues.phoneno}
                    onChange={handleChange}
                    name="phoneno"
                  />
                  <p className="text-red-700">{formErrors.phoneno}</p>
                </div>

                <div className="flex flex-col mt-3">
                  <span className="font-medium text-sm mb-2">Date</span>
                  <div className="flex justify-items-start items-center gap-3 h-7 border-gray-800">
                    <BsCalendarDate
                      size={30}
                      onClick={handleCalendarIconClick}
                      className="hover:cursor-pointer"
                    />
                    <DatePicker
                      name="date"
                      ref={datepickerRef}
                      selected={selectedDate}
                      onChange={(date) => {
                        setFormValues({ ...formValues, date });
                        setSelectedDate(date);
                      }}
                      dateFormat="dd/MM/yyyy"
                      filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
                      className="w-full"
                    />
                  </div>
                  <p className="text-red-700">{formErrors.date}</p>
                </div>

                <div className="flex flex-col mt-3">
                  <span className="font-medium text-sm mb-2">Time</span>
                  <input
                    value={formValues.time}
                    onChange={handleChange}
                    name="time"
                    disableClock="true"
                    placeholder="Time"
                    className="h-7 hover:cursor-pointer rounded-md bg-[#D9D9D9] w-full"
                    type="time"
                  />
                  <p className="text-red-700">{formErrors.time}</p>
                </div>

                <div className="bg-[#1d3a80] my-3 rounded-full h-7 flex items-center justify-center text-white hover:bg-gray-600 cursor-pointer transition-colors duration-200">
                  Submit
                </div>
              </div>

              <div className="flex flex-col w-[250px] mx-[3px]">
                <p className="text-lg font-medium">Choose your solar type</p>
                <div className="flex flex-col mt-4 ml-5">
                  <div className="flex items-center mb-[0.125rem] min-h-[1.5rem]">
                    <input
                      type="radio"
                      name="solartype"
                      value="On-Grid"
                      checked={formValues.solartype === "On-Grid"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label className="hover:cursor-pointer" htmlFor="On-Grid">
                      On-Grid
                    </label>
                  </div>

                  <div className="flex items-center mb-[0.125rem] min-h-[1.5rem]">
                    <input
                      type="radio"
                      name="solartype"
                      value="Off-Grid"
                      checked={formValues.solartype === "Off-Grid"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label className="hover:cursor-pointer" htmlFor="Off-Grid">
                      Off-Grid
                    </label>
                  </div>
                </div>
                <p className="text-red-700">{formErrors.solartype}</p>

                {formValues.solartype && (
                  <div className="flex flex-col mt-3">
                    <p className="text-lg font-medium">Choose your power option</p>
                    <div className="flex flex-col mt-4 ml-5">
                      {["5Kw", "10Kw", "20Kw", "40Kw"].map((option) => (
                        <div className="flex items-center mb-[0.125rem] min-h-[1.5rem]" key={option}>
                          <input
                            type="radio"
                            name="power"
                            value={option}
                            checked={formValues.power === option}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <label className="hover:cursor-pointer" htmlFor={option}>
                            {option}
                          </label>
                        </div>
                      ))}
                      <div className="flex items-center mb-[0.125rem] min-h-[1.5rem]">
                        <input
                          type="radio"
                          name="power"
                          value="custom"
                          checked={formValues.power === "custom"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label className="hover:cursor-pointer" htmlFor="custom">
                          Custom
                        </label>
                      </div>
                      {formValues.power === "custom" && (
                        <div className="mt-2">
                          <input
                            type="text"
                            name="customPower"
                            value={formValues.customPower}
                            onChange={handleChange}
                            placeholder="Enter custom power"
                            className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] w-full"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-red-700">{formErrors.power}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnergyOrder;
