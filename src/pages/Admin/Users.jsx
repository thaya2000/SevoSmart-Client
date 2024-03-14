import React, { useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', address: '123 Main St, City' },
        { id: 2, name: 'Jane Smith', phone: '456-789-0123', email: 'jane@example.com', address: '456 Elm St, Town' },
        // Add more users as needed
    ]);

    return (
        <div className="p-8 bg-indigo-950">
            <h1 className="text-6xl font-medium mb-4 text-white">Users</h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className='text-white'>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Phone No</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Address</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.phone}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">{user.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
