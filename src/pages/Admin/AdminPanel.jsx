import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminPanel = () => {
    const [orders, setOrders] = useState([]);
    const [serialNumbers, setSerialNumbers] = useState({});


    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/allOrders');
            setOrders(response.data); // Assuming your API response is an array of order objects
            generateSerialNumbers(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    const generateSerialNumbers = (orders) => {
        const serials = {};
        orders.forEach((order, index) => {
            serials[order.orderId] = index + 1;
        });
        setSerialNumbers(serials);
    };

    return (
        <div className="flex h-screen">
            {/* Left Drawer */}
            <div className="bg-gray-800 w-64 p-4 text-white">
                <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
                <ul className="space-y-4">
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/products">Accessories</Link></li>
                    <li><Link to="/past-projects">Past Projects</Link></li>
                    <li><Link to="/past-projects">News</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-4 overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-800">
                                <th className="px-4 py-2">No</th>
                                <th className="px-4 py-2">Customer Name</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Address</th>
                                <th className="px-4 py-2">Product Name</th>                        
                                <th className="px-4 py-2">Quantity</th>          
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.orderId}>
                                    <td className="border px-4 py-2">{serialNumbers[order.orderId]}</td>
                                    <td className="border px-4 py-2">{order.orderDate}</td>
                                    <td className="border px-4 py-2">{order.phoneNo}</td>
                                    <td className="border px-4 py-2">{order.totalPrice}</td>
                                    <td className="border px-4 py-2">{order.district}</td>
                                    <td className="border px-4 py-2">{order.city}</td>
                                    <td className="border px-4 py-2">{order.totalPrice}</td>
                                    <td className="border px-4 py-2">{order.orderStatus}</td>
                                    <td className="border px-4 py-2">
                                    <div className='flex flex-row justify-center'>
                                        <Link
                                            to={`/order-details/${order.orderId}`}
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 mr-2 rounded"
                                        >
                                            View
                                        </Link>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
