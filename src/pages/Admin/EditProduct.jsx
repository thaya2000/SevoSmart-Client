import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    image: "",
    quantity: "",
    discount: "",
    price: "",
    imagePreview: ""
  });



  const { name, quantity, discount, price} = product;
  useEffect(() => {
    console.log("Name:", name);
    console.log("Quantity:", quantity);
    console.log("Discount:", discount);
    console.log("Price:", price);
    console.log("Image:", image);
  }, [name, quantity, discount, price, image]);

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/admin/product/${id}`);
      setProduct({
        ...result.data,
        imagePreview: result.data.image
      });
    } catch (error) {
      console.error("Error loading product:", error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('quantity', quantity);
      formData.append('discount', discount);
      formData.append('price', price);
      formData.append('image', image);

      if (image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          formData.append('image', reader.result);
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
    try {
      await axios.put(`http://localhost:8080/api/v1/admin/product/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success("Product is successfully updated.");
      navigate("/products");
    } catch (err) {
      console.log(err);
      toast.error("Product update failed. Try again.");
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
    <div className="p-8 bg-indigo-950">
      <h1 className="text-4xl font-medium mb-8 text-white flex justify-center">Edit Product</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={onInputChange}
            className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            placeholder="Enter quantity"
          />
        </div>
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Discount
          </label>
          <input
            type="text"
            name="discount"
            value={discount}
            onChange={onInputChange}
            className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            placeholder="Enter discount"
          />
        </div>
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={onInputChange}
            className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4 flex flex-col justify-center md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Product Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="py-2 px-3 w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
          />
        </div>
        {imagePreview && (
          <div className="mb-4 flex justify-center">
            <img src={imagePreview} className="w-1/5 mx-auto" alt="Preview" />
          </div>
        )}
        <div className="my-8 flex justify-center">
          <button className="bg-cyan-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
