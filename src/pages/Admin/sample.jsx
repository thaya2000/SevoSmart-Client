// import React, { useState, useRef, useEffect } from "react";
// import { BsCalendarDate } from "react-icons/bs";
// import { TiTick } from "react-icons/ti";
// import { FaRegFolderClosed } from "react-icons/fa6";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import "react-datepicker/dist/react-datepicker.css";

// const NewBuildingConsultation = () => {
//   const [firstName, setFirstName] = useState("user_f");
//   const [lastName, setLastName] = useState("user_l");
//   const [email, setEmail] = useState("thevarasathayanan@gmail.com");
//   const [phoneNo, setPhoneNo] = useState("1234567890");
//   const [attachments, setAttachements] = useState(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("First Name:", firstName);
//     console.log("Last Name:", lastName);
//     console.log("Email:", email);
//     console.log("Phone Number:", phoneNo);
//     console.log("attachments:", attachments);
//   }, [firstName, lastName, email, phoneNo, attachments]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const consultantData = new FormData();
//       consultantData.append("firstName", firstName);
//       consultantData.append("lastName", lastName);
//       consultantData.append("email", email);
//       consultantData.append("phoneNo", phoneNo);
//       for (let i = 0; i < attachments.length; i++) {
//         consultantData.append("attachments", attachments[i]);
//       }

//       const { data } = await axios.post(
//         "http://localhost:8083/person",
//         consultantData
//       );
//       console.log(data);
//       if (data?.error) {
//         toast.error(data.error);
//       } else {
//         toast.success(Document is uploaded successfully);
//         navigate("/");
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Product create failed. Try again.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col items-center gap-5 py-[100px]">
//           <div className="flex flex-col sm:flex-row sm:justify-center gap-8">
//             <div className="flex flex-col w-[250px]">
//               <h1 className="text-3xl font-medium">
//                 Schedule your time & Connect with us
//               </h1>
//               <h1 className="text-3xl font-medium"></h1>
//               <div className="flex flex-row ml-1 pr-4 mt-2">
//                 <TiTick size={25} color="#3F75C6" />
//                 <p className="ml-1 ">
//                   ensuring timely completion without compromising on quality
//                 </p>
//               </div>
//               <div className="flex flex-row ml-1 pr-4 mt-2">
//                 <TiTick size={25} color="#3F75C6" />
//                 <p className="ml-1 ">
//                   experience a seamless blend of precision and reliability in
//                   your construction endeavors
//                 </p>
//               </div>
//               <div className="flex flex-row ml-1 pr-4 mt-2">
//                 <TiTick size={25} color="#3F75C6" />
//                 <p className="ml-1 ">
//                   meticulously scheduling every phase of your project
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col mt-[50px] w-[250px] mx-[3px]">
//               <div className="flex flex-col  ">
//                 <text className="font-medium text-sm">First Name</text>
//                 <input
//                   className="pl-[4px] h-7 rounded-md bg-[#D9D9D9] "
//                   type="text"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   name="firstname"
//                 />
//               </div>
//               {/* <p className="text-red-700">{formErrors.firstname}</p> */}
//               <div className="flex flex-col  ">
//                 <text className="font-medium text-sm"> Last Name</text>
//                 <input
//                   className="pl-[4px] h-7 rounded-md bg-[#D9D9D9] "
//                   type="text"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   name="lastname"
//                 />
//               </div>
//               {/* <p className="text-red-700">{formErrors.lastname}</p> */}
//               <div className="flex flex-col mt-2">
//                 <text className="font-medium text-sm">Email ID</text>
//                 <input
//                   className="h-7 pl-[4px] rounded-md  bg-[#D9D9D9]"
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   name="email"
//                 />
//               </div>
//               {/* <p className="text-red-700">{formErrors.email}</p> */}
//               <div className="flex flex-col mt-2">
//                 <text className="font-medium text-sm">Phone No</text>
//                 <input
//                   className="h-7 pl-[4px] rounded-md bg-[#D9D9D9] "
//                   type="text"
//                   value={phoneNo}
//                   onChange={(e) => setPhoneNo(e.target.value)}
//                   name="phoneno"
//                 />
//               </div>
//               {/* <p className="text-red-700">{formErrors.phoneno}</p> */}
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-8">
//             <div className="flex flex-col w-[250px]">
//               <p className="mt-2 pr-4 ml-1">
//                 Do you have any plans already?{" "}
//                 <a href="#">
//                   <span className="hover:cursor-pointer py-4 text-[#0569FF]">
//                     Submit
//                   </span>
//                 </a>{" "}
//                 your documents here
//               </p>
//               <div className="mt-2 ml-6">
//                 <label
//                   htmlFor="file-input"
//                   className="flex items-center mb-2 hover:cursor-pointer"
//                 >
//                   <FaRegFolderClosed size={30} />
//                 </label>
//                 <input
//                   className="pl-[4px] h-7 rounded-md bg-[#D9D9D9]"
//                   type="file"
//                   multiple
//                   name="attachments"
//                   onChange={(e) => setAttachements(e.target.files)}
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col w-[250px] mx-[3px] justify-center cursor-pointer">
//               <button className="bg-[#334BA1] mt-3 rounded-full h-7 flex justify-center">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewBuildingConsultation;


// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const EditProduct = () => {
// //   const navigate = useNavigate();
// //   const { id } = useParams();

// //   const [product, setProduct] = useState({
// //     name: "",
// //     image: null, // Changed image to null
// //     quantity: "",
// //     discount: "",
// //     price: "",
// //     imagePreview: "" // Added imagePreview state
// //   });

// //   const { name, image, quantity, discount, price, imagePreview } = product;

// //   const onInputChange = (e) => {
// //     setProduct({ ...product, [e.target.name]: e.target.value });
// //   };

// //   useEffect(() => {
// //     loadProduct();
// //   }, []);

// //   const loadProduct = async () => {
// //     try {
// //       const result = await axios.get(`http://localhost:8080/api/v1/admin/product/${id}`);
// //       setProduct({
// //         ...result.data,
// //         imagePreview: result.data.image // Set imagePreview with existing image URL
// //       });
// //     } catch (error) {
// //       console.error("Error loading product:", error);
// //       // Handle error
// //     }
// //   };
  
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const formData = new FormData();
// //       formData.append('name', name);
// //       formData.append('quantity', quantity);
// //       formData.append('discount', discount);
// //       formData.append('price', price);
// //       formData.append('image', image); // Append image file to form data

// //       await axios.put(`http://localhost:8080/api/v1/admin/product/${id}`, formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
// //         },
// //       });
// //       navigate("/products");
// //     } catch (err) {
// //       console.log(err);
// //       // Handle error
// //     }
// //   };

// //   const handleImageChange = (e) => {
// //     const selectedImage = e.target.files[0];
// //     setProduct({ ...product, image: selectedImage });

// //     // Generate image preview URL
// //     const reader = new FileReader();
// //     reader.onload = () => {
// //       setProduct({ ...product, imagePreview: reader.result }); // Update imagePreview state
// //     };
// //     reader.readAsDataURL(selectedImage);
// //   };

// //   return (
// //     <div className="p-8 bg-indigo-950">
// //       <h1 className="text-4xl font-medium mb-8 text-white flex justify-center">Edit Product</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-4 flex flex-col justify-center md:flex-row">
// //           <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
// //             Product Name
// //           </label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={name}
// //             onChange={onInputChange}
// //             className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
// //             placeholder="Enter product name"
// //           />
// //         </div>
// //         <div className="mb-4 flex flex-col justify-center md:flex-row">
// //           <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
// //             Quantity
// //           </label>
// //           <input
// //             type="text"
// //             name="quantity"
// //             value={quantity}
// //             onChange={onInputChange}
// //             className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
// //             placeholder="Enter quantity"
// //           />
// //         </div>
// //         <div className="mb-4 flex flex-col justify-center md:flex-row">
// //           <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
// //             Discount
// //           </label>
// //           <input
// //             type="text"
// //             name="discount"
// //             value={discount}
// //             onChange={onInputChange}
// //             className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
// //             placeholder="Enter discount"
// //           />
// //         </div>
// //         <div className="mb-4 flex flex-col justify-center md:flex-row">
// //           <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
// //             Price
// //           </label>
// //           <input
// //             type="text"
// //             name="price"
// //             value={price}
// //             onChange={onInputChange}
// //             className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
// //             placeholder="Enter price"
// //           />
// //         </div>
// //         <div className="mb-4 flex flex-col justify-center md:flex-row">
// //           <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
// //             Product Image
// //           </label>
// //           <input
// //             type="file"
// //             name="image"
// //             onChange={handleImageChange}
// //             accept="image/*" // Specify accepted file types (e.g., images)
// //             className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
// //           />
// //         </div>
// //         {/* Display image preview */}
// //         {imagePreview && (
// //           <div className="mb-4 flex justify-center">
// //             <img src={imagePreview}  className="w-1/5 mx-auto" alt="Preview" />
// //           </div>
// //         )}
// //         <div className="my-8 flex justify-center">
// //           <button type="submit" className="bg-cyan-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
// //             Update Product
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditProduct;
