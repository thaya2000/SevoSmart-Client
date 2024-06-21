import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import RambousLoader from "../../routes/RambousLoader";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [serialNumbers, setSerialNumbers] = useState({});

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/admin/allProduct");
      setLoading(false);
      setProducts(result.data);
      generateSerialNumbers(result.data);
      console.log(result.data.Products.productName);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const generateSerialNumbers = (products) => {
    const serials = {};
    products.forEach((product, index) => {
      serials[product.id] = index + 1;
    });
    setSerialNumbers(serials);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/admin/deleteProduct/${id}`);
      toast.success("Product is successfully deleted.");
      loadProducts();
      setDeleteProductId(null);
    } catch (error) {
      toast.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="p-8 bg-indigo-950">
          <h1 className="text-6xl font-medium mb-4 text-white">Accessories</h1>
          <Link
            to="/add-product"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 me-2 my-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Accessories
          </Link>

          <div className="overflow-x-auto flex justify-center">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-white">
                  <th className="px-4 py-2">Serial No</th>
                  <th className="px-4 py-2">Product Name</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Discount</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Brand</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="border px-4 py-2">
                      {serialNumbers[product.id]}
                    </td>
                    <td className="border px-4 py-2">{product.productName}</td>
                    <td className="border px-4 py-2">
                      <div className="flex flex-row justify-center">
                        <img
                          src={product.productImageURL}
                          className="h-16 object-cover rounded-lg mx-2"
                          style={{ width: "auto" }}
                          alt={`Product ${product.id}`}
                        />
                      </div>
                    </td>
                    <td className="border px-4 py-2">{product.quantity}</td>
                    <td className="border px-4 py-2">{product.discount}</td>
                    <td className="border px-4 py-2">{product.price}</td>
                    <td className="border px-4 py-2">{product.brand}</td>
                    <td className="border px-4 py-2">{product.category}</td>
                    <td className="border px-4 py-2">
                      <div className="flex flex-row justify-center">
                        <Link
                          to={`/admin/edit-product/${product.id}`}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 mr-2 rounded"
                        >
                          Edit
                        </Link>
                        <Link
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                          onClick={() => setDeleteProductId(product.id)}
                        >
                          Delete
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Confirmation Modal */}
          {deleteProductId && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Delete Product
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete this product?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => handleDeleteProduct(deleteProductId)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setDeleteProductId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
