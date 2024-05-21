import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

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
        <div className="p-8 bg-indigo-950">
            <h1 className="text-6xl font-medium mb-4 text-white">Users</h1>

            <div className="overflow-x-auto">
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
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                            Delete User
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete this User?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => handleDeleteUser(deleteUserId)}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setDeleteUserId(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;
