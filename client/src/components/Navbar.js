import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">SiteMonitor</h1>
        <div className="space-x-4">
          <a href="/login" className="text-gray-700 hover:text-blue-600">Login</a>
          <a href="/register" className="text-gray-700 hover:text-blue-600">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
