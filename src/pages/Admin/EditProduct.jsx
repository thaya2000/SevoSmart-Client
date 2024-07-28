import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import RambousLoader from "../../routes/RambousLoader";

const EditProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [product, setProduct] = useState({
    productName: "",
    quantity: "",
    discount: "",
    price: "",
    brand: "",
    category: "",
  });

  const { productName, quantity, discount, price, brand, category } = product;

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`/admin/product/${id}`);
      setLoading(false);
      const productData = result.data;
      setProduct(productData);
      setImagePreview(productData.productImageURL); // Assuming URL is returned
    } catch (error) {
      setLoading(false);
      console.error("Error loading product:", error);
    }
  };

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProductImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("quantity", quantity);
      formData.append("discount", discount);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("category", category);

      if (productImage) {
        formData.append("productpic", productImage);
      }

      await axios.put(`/admin/updateProduct/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product is successfully updated.");
      setSubmitting(false);
      navigate("/products");
    } catch (err) {
      setSubmitting(false);
      console.log(err);
      toast.error("Product update failed. Try again.");
    }
  };

  return (
    <div>
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="flex">
          <div className="bg-gray-800 w-100% p-4 text-white">
            <Link to="/admin-panel">
              <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            </Link>
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
            <h1 className="text-4xl font-medium mb-8 text-blue-900 flex justify-center">
              Edit Product
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex flex-col justify-center md:flex-row">
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
              <div className="mb-6 flex flex-col justify-center md:flex-row">
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
              <div className="mb-6 flex flex-col justify-center md:flex-row">
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
              <div className="mb-6 flex flex-col justify-center md:flex-row">
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
              <div className="mb-6 flex flex-col justify-center md:flex-row">
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
              <div className="mb-6 flex flex-col justify-center md:flex-row">
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
              <div className="mb-6 flex flex-col justify-center md:flex-row">
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
                <div className="mb-6 flex justify-center">
                  <img
                    src={imagePreview}
                    className="w-1/5 mx-auto"
                    alt="Preview"
                  />
                </div>
              )}
              <div className="my-8 flex justify-center">
                <button
                  type="submit"
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                    submitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={submitting}
                >
                  {submitting ? (
                    <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                  ) : (
                    "Update Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
