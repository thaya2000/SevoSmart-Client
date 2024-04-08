import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
    // Sample order data
    const [orders, setOrders] = useState([
        { id: 1, productName: 'Product 1', quantity: 2, username: 'User 1', phone: '123-456-7890', status: 'Pending', address: '123 Main St',email:'abcd@gmail.com' },
        { id: 2, productName: 'Product 2', quantity: 1, username: 'User 2', phone: '987-654-3210', status: 'Shipped', address: '456 Elm St',email:'abcd@gmail.com' },
        // Add more orders as needed
    ]);

    return (
        <div className="flex h-screen">
            {/* Left Drawer */}
            <div className="bg-gray-800 w-64 p-4 text-white">
                <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
                <ul className="space-y-4">
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/products">Accessories</Link></li>
                    <li><Link to="/past-projects">Past Projects</Link></li>
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
                                <th className="px-4 py-2">Username</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Address</th>
                                <th className="px-4 py-2">Product Name</th>                        
                                <th className="px-4 py-2">Quantity</th>          
                                <th className="px-4 py-2">Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td className="border px-4 py-2">{order.id}</td>
                                    <td className="border px-4 py-2">{order.username}</td>
                                    <td className="border px-4 py-2">{order.phone}</td>
                                    <td className="border px-4 py-2">{order.email}</td>
                                    <td className="border px-4 py-2">{order.address}</td>
                                    <td className="border px-4 py-2">{order.productName}</td>
                                    <td className="border px-4 py-2">{order.quantity}</td>
                                    <td className="border px-4 py-2">{order.status}</td>
                                    
                                    
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
