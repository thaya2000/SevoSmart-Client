import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, listItem: 'Product 1', Quantity: '4', Discount: '2', price: 10.99 },
        { id: 2, listItem: 'Product 2', Quantity: '3', Discount: '1', price: 9.99 },
        { id: 3, listItem: 'Product 3', Quantity: '4', Discount: '2', price: 10.99 },
        { id: 4, listItem: 'Product 4', Quantity: '3', Discount: '1', price: 9.99 },
        // Add more products as needed
    ]);

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <div className="p-8 bg-indigo-950">
            <h1 className="text-6xl font-medium mb-4 text-white">Accessories</h1>
            <Link
                to="/add-product"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3  me-2 my-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Add Accessories
            </Link>

            <div className="overflow-x-auto flex justify-center">
                <table className="table-auto w-full max-w-4xl">
                    <thead>
                        <tr className='text-white'>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">List Item</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Discount</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="border px-4 py-2">{product.id}</td>
                                <td className="border px-4 py-2">{product.listItem}</td>
                                <td className="border px-4 py-2">{product.Quantity}</td>
                                <td className="border px-4 py-2">{product.Discount}</td>
                                <td className="border px-4 py-2">{product.price}</td>
                                <td className="border px-4 py-2 flex justify-center items-center">
                                    <Link
                                        to={`/edit-product/${product.id}`}
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 mr-2 rounded"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                        onClick={() => handleDeleteProduct(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 text-white">
                <h2 className="text-xl mb-4 ">Order Details</h2>
                {/* Placeholder for order details */}
                <p>No orders available.</p>
            </div>
        </div>
    );
};

export default Products;
