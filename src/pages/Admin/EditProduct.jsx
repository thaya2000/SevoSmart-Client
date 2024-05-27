import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EditProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [product, setProduct] = useState({
    productName: "",
    productImage: "",
    quantity: "",
    discount: "",
    price: "",
    brand: "",
    category: "",
    imagePreview: "",
  });

  const { productName, quantity, discount, price, brand, category } = product;
  useEffect(() => {
    console.log("Name:", productName);
    console.log("Quantity:", quantity);
    console.log("Discount:", discount);
    console.log("Price:", price);
    console.log("Brand:", brand);
    console.log("Category:", category);
    console.log("Image:", productImage);
  }, [productName, quantity, discount, price, productImage, brand, category]);

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
    console.log(id);
  }, []);

  const loadProduct = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://sevosmarttech-efce83f08cbb.herokuapp.com/admin/product/${id}`
      );
      setLoading(false);
      setProduct({
        ...result.data,
        imagePreview: result.data.productImage,
      });
    } catch (error) {
      console.error("Error loading product:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("quantity", quantity);
      formData.append("discount", discount);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("category", category);
      formData.append("productpic", productImage);

      if (productImage) {
        const reader = new FileReader();
        reader.readAsDataURL(productImage);
        reader.onload = () => {
          formData.append("productpic", reader.result);
          submitFormData(formData);
        };
      } else {
        submitFormData(formData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitFormData = async (formData) => {
    setLoading(true);
    try {
      console.log(id);
      await axios.put(`/admin/updateProduct/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      toast.success("Product is successfully updated.");
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
      toast.error("Product update failed. Try again.");
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProductImage(selectedImage);

    // Generate image preview URL
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className="flex">
      <div className="bg-gray-800 w-64 p-4 text-white">
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
    <div className="p-8 bg-white flex-1">
      
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <h1 className="text-4xl font-medium mb-8 text-blue-900 flex justify-center">
        Edit Product
      </h1>
      <form onSubmit={handleSubmit}>
  <div className="mb-6 flex flex-col justify-center md:flex-row"> {/* Increased mb (margin bottom) value */}
    <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
      Product Name
    </label>
    <input
      type="text"
      name="productName"
      value={productName}
      onChange={onInputChange}
      className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
    />
  </div>
  <div className="mb-6 flex flex-col justify-center md:flex-row"> {/* Increased mb (margin bottom) value */}
    <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
      Quantity
    </label>
    <input
      type="text"
      name="quantity"
      value={quantity}
      onChange={onInputChange}
      className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
    />
  </div>
  <div className="mb-6 flex flex-col justify-center md:flex-row"> {/* Increased mb (margin bottom) value */}
    <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
      Discount
    </label>
    <input
      type="text"
      name="discount"
      value={discount}
      onChange={onInputChange}
      className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
    />
  </div>
  <div className="mb-6 flex flex-col justify-center md:flex-row"> {/* Increased mb (margin bottom) value */}
    <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
      Price
    </label>
    <input
      type="text"
      name="price"
      value={price}
      onChange={onInputChange}
      className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
    />
  </div>
  <div className="mb-6 flex flex-col justify-center md:flex-row"> {/* Increased mb (margin bottom) value */}
    <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
      Brand
    </label>
    <input
      type="text"
      name="brand"
      value={brand}
      onChange={onInputChange}
      className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
    />
  </div>
  <div className="mb-6 flex flex-col justify-center md:flex-row"> {/* Increased mb (margin bottom) value */}
    <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
      Category
    </label>
    <input
      type="text"
      name="category"
      value={category}
      onChange={onInputChange}
      className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
    />
  </div>
  <div className="mb-6 flex flex-col justify-center md:flex-row"> {/* Increased mb (margin bottom) value */}
    <label className="block text-blue-900 text-m font-bold mb-4 md:mb-0 md:w-1/4">
      Product Image
    </label>
    <input
      type="file"
      name="productImage"
      onChange={handleImageChange}
      accept="image/*"
      className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
    />
  </div>
  {imagePreview && (
    <div className="mb-6 flex justify-center"> {/* Increased mb (margin bottom) value */}
      <img src={imagePreview} className="w-1/5 mx-auto" alt="Preview" />
    </div>
  )}
  <div className="my-8 flex justify-center">
    <button className="bg-red-700 hover:bg-grey text-white font-bold py-2 px-4 rounded">
      Update Product
    </button>
  </div>
</form>

    </div>
    </div>
  );
};

export default EditProduct;
