import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    listItem: '',
    Quantity: '',
    Discount: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    onAddProduct(product);
    // Reset the form after submission
    setProduct({
      listItem: '',
      Quantity: '',
      Discount: '',
      price: ''
    });
  };

  return (
    <div className="p-8 bg-indigo-950">
      <h1 className="text-4xl font-medium mb-8 text-white flex justify-center">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col justify-center  md:flex-row">
          <label className="block text-white text-m font-bold mb-2 md:mb-0 md:w-1/4">
            Product Name
          </label>
          <input
            type="text"
            name="listItem"
            value={product.listItem}
            onChange={handleChange}
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
            name="Quantity"
            value={product.Quantity}
            onChange={handleChange}
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
            name="Discount"
            value={product.Discount}
            onChange={handleChange}
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
            value={product.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full max-w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            placeholder="Enter price"
          />
        </div>
        <div className="my-8 flex justify-center">
          <Link
            to="/add-product"
            className="bg-cyan-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Product
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
