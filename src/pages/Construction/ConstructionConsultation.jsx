import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./ConstructionConsultation.css";

const NewBuildingConsultation = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("Constuction");
  const [chooseProduct, setChooseProduct] = useState(
    name || "New Building Consultation"
  );
  // const [chooseProduct, setChooseProduct] = useState(name);
  const [message, setMessage] = useState("");

  const [attachments, setAttachements] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNo);
    console.log("attachments:", attachments);
    console.log("Address:", address);
    console.log("Message:", message);
    console.log("Category:", category);
    console.log("Choose Product:", chooseProduct);
    setChooseProduct(name);
  }, [
    firstName,
    lastName,
    email,
    phoneNo,
    attachments,
    address,
    message,
    category,
    chooseProduct,
    name,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const consultantData = new FormData();
      consultantData.append("firstName", firstName);
      consultantData.append("lastName", lastName);
      consultantData.append("email", email);
      consultantData.append("phoneNo", phoneNo);
      consultantData.append("address", address);
      consultantData.append("category", category);
      consultantData.append("chooseProduct", chooseProduct);
      consultantData.append("message", message);
      for (let i = 0; i < attachments.length; i++) {
        consultantData.append("attachments", attachments[i]);
      }

      const { data } = await axios.post("/admin/notification", consultantData);
      console.log(data);
      setLoading(false);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`Consultation is uploaded successfully`);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Product create failed. Try again.");
    }
  };

  return (
    <div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4 mb-4"> <span className="ml-50 text-lg text-blue-900 font-semibold">Book a consultation for making suitable plans and discover what suits you best!</span> </div>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center gap-5 py-[25px]">
          <div className="flex flex-col sm:flex-row sm:justify-center gap-8">
            <div className="container-sheduletime flex flex-col w-[450px]">
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
              <div className=" fileupload-container flex flex-col mt-4 w-[450px] ">
              <p className="mt-2 pr-4 ml-1" style={{ fontWeight: 'bold' }}>
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
  className="pl-2 h-9 w-60 mx-auto rounded-md bg-[#D9D9D9] text-center"
  type="file"
  multiple
  name="attachments"
  onChange={(e) => setAttachements(e.target.files)}
/>

              </div>
            </div>
            </div>
                      <div className="consultaion-containerN">
            <div className=" container-form flex flex-col mt-[50px] w-[300px] mx-[3px] item-center">
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

              <div className="flex flex-col mt-2">
                <text className="font-medium text-sm">Address</text>
                <input
                  className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                />
              </div>

              <div className="flex flex-col mt-2">
                <text className="font-medium text-sm">Choose Construction</text>
                <input
                  className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
                  type="text"
                  value={chooseProduct}
                  onChange={(e) => setChooseProduct(e.target.value)}
                  name="message"
                />
              </div>

              <div className="flex flex-col mt-2">
                <text className="font-medium text-sm">message</text>
                <input
                  className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                />
              </div>

              <div className="flex flex-col w-[250px] mx-[3px] mt-2 justify-center cursor-pointer">
              <button className=" text-white bg-[#334BA1] mt-3 ml-8 rounded-full h-7 w-42 flex justify-center">
                Submit
              </button>
            </div>
            </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            

           
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBuildingConsultation;
