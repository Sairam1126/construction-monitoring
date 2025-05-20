import React from 'react';

const users = [
  { id: 1, email: 'admin@example.com', role: 'admin' },
  { id: 2, email: 'user@example.com', role: 'user' },
];

const UserManagement = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border">
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
