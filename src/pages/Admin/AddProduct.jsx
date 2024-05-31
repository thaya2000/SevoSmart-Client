import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { userAuth } from "../../context/authContext";
import "./AddProduct.css"; // Make sure to import your CSS file

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const [auth, setAuth] = userAuth();

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Name:", name);
    console.log("Quantity:", quantity);
    console.log("Discount:", discount);
    console.log("Price:", price);
    console.log("Image:", image);
  }, [name, quantity, discount, price, image]);

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
        `/admin/addProduct/${auth.user.id}`,
        productData
      );

      setLoading(false);

      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Product is successfully added.");
        navigate("/admin/products");
      }
    } catch (err) {
      console.log(err);
      toast.error("Product create failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Generate image preview URL
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/products">Accessories</Link>
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
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
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
            <button className="bg-red-700 hover:bg-grey-700 text-white font-bold py-2 px-4 rounded">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
