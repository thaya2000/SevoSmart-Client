import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RambousLoader from '../../routes/RambousLoader';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/ordersByCustomer/${user.userId}`
            );
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
        <div className="text-3xl text-blue-900 font-semibold text-center mb-4">
                My Orders
            </div>

            {loading ? (
                <RambousLoader />
            ) : (
                <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4">Order #{order.orderNumber}</h2>
                            <p className="mb-2">
                                <span className="font-bold">Date:</span> {new Date(order.orderDate).toLocaleDateString()}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Status:</span>{' '}
                                <span
                                    className={`px-2 py-1 rounded-full text-sm ${order.orderStatus === 'DELIVERED'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                        }`}
                                >
                                    {order.orderStatus}
                                </span>
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Total Amount:</span> ${parseFloat(order.orderAmount).toFixed(2)}
                            </p>
                            <p className="mb-4">
                                <span className="font-bold">Billing Address:</span> {order.orderBillingAddress}
                            </p>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Products:</h3>
                                <div className="space-y-3">
                                    {order.products.map((product, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <img
                                                src={product.productImageUrl}
                                                alt={product.productName}
                                                className="w-16 h-16 object-cover rounded-lg shadow-md"
                                            />
                                            <div>
                                                <p className="font-bold">{product.productName}</p>
                                                <p>Quantity: {product.productQuantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;
