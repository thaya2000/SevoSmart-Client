import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { userAuth } from "../../context/authContext";
import "./AddProduct.css";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [auth, setAuth] = userAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productData = new FormData();
      productData.append("productName", name);
      productData.append("quantity", quantity);
      productData.append("discount", discount);
      productData.append("price", price);
      productData.append("productpic", image);
      productData.append("category", category);
      productData.append("description", description);
      productData.append("brand", brand);

      const { data } = await axios.post(
        `https://sevosmarttech-efce83f08cbb.herokuapp.com/admin/addProduct/${user.userId}`,
        productData
      );

      setLoading(false);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Product added successfully.");
        navigate("/products");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setLoading(false);
      toast.error("Product creation failed. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="admin-panel">
      <div className="admin-sidebar bg-gray-800 w-100% p-4 text-white">
        <Link to="/admin-panel">
          <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        </Link>
        <ul className="space-y-4">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/products">Accessories</Link>
          </li>
          <li>
            <Link to="/past-projects">Past Projects</Link>
          </li>
          <li>
            <Link to="/news-admin">News</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="admin-content">
        <h1 className="admin-tableh">Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1"
              placeholder="Enter quantity"
            />
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Discount
            </label>
            <input
              type="text"
              name="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1"
              placeholder="Enter discount"
            />
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1"
              placeholder="Enter price"
            />
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1"
              placeholder="Enter category"
            />
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1"
              placeholder="Enter brand"
            />
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-6 flex flex-col justify-center md:flex-row">
            <label className="block text-blue-900 text-m font-bold mb-1 md:mb-0 md:w-1/4">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4 mt-1"
            />
          </div>
          {imagePreview && (
            <div className="mb-6 flex flex-col justify-center md:flex-row">
              <img
                src={imagePreview}
                alt="Product Preview"
                className="w-1/5 mx-auto"
              />
            </div>
          )}
          <div className="my-8 flex justify-center">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
