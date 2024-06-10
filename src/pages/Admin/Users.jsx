import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import './Users.css';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [serialNumbers, setSerialNumbers] = useState({});

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get("https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/auth/users");
            console.log('Loaded all Users:', result.data); // Log loaded projects
            setAllUsers(result.data);
            generateSerialNumbers(result.data);
        } catch (error) {
            console.error('Error loading all users:', error);
        }
    };

    const generateSerialNumbers = (allUsers) => {
        const serials = {};
        allUsers.forEach((allUser, index) => {
            serials[allUser.id] = index + 1;
        });
        setSerialNumbers(serials);
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/auth/users/${id}`);
            toast.success("User is successfully deleted.");
            loadUsers();
            setDeleteUserId(null);
        } catch (error) {
            toast.error('Error deleting user:', error);
        }
    };

    return (
        <div className="admin-panelflex h-screen">
      
      <div className=" admin-sidebar bg-gray-800 w-64 p-4 text-white">
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

            <div className="flex-1 p-4 overflow-y-auto">
            <h className=" admin-tableh text-2xl font-bold mb-4">Users</h>
                <table className="table-auto w-full">
                    <thead>
                        <tr className='text-white'>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Last Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {allUsers.map(user => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">{serialNumbers[user.id]}</td>
                                <td className="border px-4 py-2">{user.firstname}</td>
                                <td className="border px-4 py-2">{user.lastname}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.role}</td>
                                <td className="border px-4 py-2">
                                    <div className='flex flex-row justify-center'>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                                            onClick={() => setDeleteUserId(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {deleteUserId && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                Delete User
                            </h3>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Are you sure you want to delete this User?
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
                                onClick={() => handleDeleteUser(deleteUserId)}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                onClick={() => setDeleteUserId(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
