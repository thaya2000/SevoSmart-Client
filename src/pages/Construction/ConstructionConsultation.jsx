import React, { useState, useRef, useEffect } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";
import axios from "axios";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const NewBuildingConsultation = () => {
  const [firstName, setFirstName] = useState("user_f");
  const [lastName, setLastName] = useState("user_l");
  const [email, setEmail] = useState("thevarasathayanan@gmail.com");
  const [phoneNo, setPhoneNo] = useState("1234567890");
  const [attachments, setAttachements] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNo);
    console.log("attachments:", attachments);
  }, [firstName, lastName, email, phoneNo, attachments]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const consultantData = new FormData();
      consultantData.append("firstName", firstName);
      consultantData.append("lastName", lastName);
      consultantData.append("email", email);
      consultantData.append("phoneNo", phoneNo);
      for (let i = 0; i < attachments.length; i++) {
        consultantData.append("attachments", attachments[i]);
      }

      const { data } = await axios.post("/admin/notification", consultantData);
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`Document is uploaded successfully`);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Product create failed. Try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                  experience a seamless blend of precision and reliability in
                  your construction endeavors
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstname"
                />
              </div>
              {/* <p className="text-red-700">{formErrors.firstname}</p> */}
              <div className="flex flex-col  ">
                <text className="font-medium text-sm"> Last Name</text>
                <input
                  className="pl-[4px] h-7 rounded-md bg-[#D9D9D9] "
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastname"
                />
              </div>
              {/* <p className="text-red-700">{formErrors.lastname}</p> */}
              <div className="flex flex-col mt-2">
                <text className="font-medium text-sm">Email ID</text>
                <input
                  className="h-7 pl-[4px] rounded-md  bg-[#D9D9D9]"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
              </div>
              {/* <p className="text-red-700">{formErrors.email}</p> */}
              <div className="flex flex-col mt-2">
                <text className="font-medium text-sm">Phone No</text>
                <input
                  className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
                  type="text"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  name="phoneno"
                />
              </div>
              {/* <p className="text-red-700">{formErrors.phoneno}</p> */}
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
                <label
                  htmlFor="file-input"
                  className="flex items-center mb-2 hover:cursor-pointer"
                >
                  <FaRegFolderClosed size={30} />
                </label>
                <input
                  className="pl-[4px] h-7 rounded-md bg-[#D9D9D9]"
                  type="file"
                  multiple
                  name="attachments"
                  onChange={(e) => setAttachements(e.target.files)}
                />
              </div>
            </div>

            <div className="flex flex-col w-[250px] mx-[3px] justify-center cursor-pointer">
              <button className="bg-[#334BA1] mt-3 rounded-full h-7 flex justify-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBuildingConsultation;
